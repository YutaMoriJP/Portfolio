import { useEffect, useReducer } from "react";
import TextLink from "../../StyledComponent/Link";

const lazyLoad = (state) => state;

const reducer = (state, action) => {
  switch (action.type) {
    case "pending":
      return { ...state, status: "pending" };

    case "resolved":
      return { ...state, status: "resolved", href: action.payload.href };

    case "rejected":
      return { ...state, status: "rejected", error: action.payload.error };

    default:
      throw new Error("invalid case");
  }
};

/**
 *
 * @param {string | object} url - it can either be a blob object that can be converted to an object URL with URL.createObjectURL, or the URL of the resource that needs to be downloaded
 * @param {string} download - the desired file name. If nothing is passed, then the default value 'file' will be used
 * @param {function} onOpen - state setter function that updates the open state to true, which opens up a notification message like 'Ready to download'
 * onOpen is called after object URL is created in useEffect
 * @returns {element} download UI is rendered by <Download/>
 */

const Download = ({ url = "", download = "file.txt", onOpen = () => null, setMessageText = () => null }) => {
  const [{ status, error, href }, dispatch] = useReducer(
    reducer,
    {
      status: "idle",
      error: null,
      href: ""
    },
    lazyLoad
  );

  useEffect(() => {
    let didCancel = false;
    if (!url) return;

    let controller = new AbortController();
    const signal = controller.signal;

    const downloadAsync = async () => {
      try {
        if (typeof url === "object") {
          const href = URL.createObjectURL(url);

          if (!didCancel) {
            dispatch({ type: "resolved", payload: { href } });
          }
        } else {
          dispatch({ type: "pending" });

          const res = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json, image/*, text/*, charset=utf-8",
              Authorization: "basic"
            },
            cache: "default"
          });

          if (!res.ok && !didCancel) {
            dispatch({
              type: "rejected",
              payload: {
                error: {
                  message: `An error occurred. Status code is ${res.status}`
                }
              }
            });
            return;
          }

          const blob = await res.blob();
          const href = URL.createObjectURL(blob);

          if (!didCancel) {
            dispatch({ type: "resolved", payload: { href } });
          }
        }

        onOpen();
        setMessageText({
          messageText: "Content is ready to be downloaded!",
          color: "seagreen"
        });
      } catch (error) {
        if (didCancel || signal.aborted) {
          return;
        }

        if (!didCancel) {
          dispatch({ type: "rejected", payload: { error } });
        }
      }
    };

    downloadAsync();

    return () => {
      // Revoking the url object here allows for multiple downloads or else a network error will happen
      URL.revokeObjectURL(href);
      // Prevents side-effects when component unmounts.
      didCancel = true;
      // Abort previous request
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <>
      {status === "pending" && <p>loading...</p>}

      {status === "rejected" && <p>{error.message || "Something went wrong"}</p>}

      {status === "resolved" && (
        <TextLink href={href} download={download || "file"}>
          Download - {download || "file"}
        </TextLink>
      )}
    </>
  );
};

export default Download;
