const Graph = `class Graph {
    constructor(isWeighted = false, isDireced = false) {
      this.vertices = [];
      this.isWeighted = isWeighted;
      this.isDireced = isDireced;
    }
    addVertex(data) {
      const newVertex = new Vertex(data);
      this.vertices.push(newVertex);
      return newVertex;
    }
    removeVertex(removedVertex) {
      if (!(removedVertex instanceof Vertex)) throw new Error("not a vertex instance");
      this.vertices = this.vertices.filter(vertex => vertex !== removedVertex);
    }
    //vertexA <--> vertexB if this.isDirected is FALSE
    addEdge(vertexA, vertexB, weight) {
      if ([vertexA, vertexB].every(vertex => isVertex(vertex, Vertex))) {
        const weightVal = this.isWeighted ? weight : null;
        vertexA.addEdge(vertexB, weightVal);
        if (!this.isDireced) {
          vertexB.addEdge(vertexA, weightVal);
        }
      }
    }
    removeEdge(vertexA, vertexB) {
      if ([vertexA, vertexB].every(vertex => isVertex(vertex, Vertex))) {
        vertexA.removeEdge(vertexB);
        if (!this.isDireced) {
          vertexB.removeEdge(vertexA);
        }
      }
    }
    print() {
      this.vertices.forEach(vertex => vertex.printEdge());
    }
  }

  //Below is a Jest Testing code
  
  test("Testing Graph class", () => {
    const pokemonMap = new Graph(true, false); //a weighted and undirected graph
    const kanto = pokemonMap.addVertex("kanto");
    const johto = pokemonMap.addVertex("johto");
    expect(kanto).toEqual({ data: "kanto", edges: [] });
    expect(johto).toEqual({ data: "johto", edges: [] });
    expect(pokemonMap).toEqual({
      vertices: [kanto, johto],
      isWeighted: true,
      isDireced: false,
    });
    pokemonMap.addEdge(kanto, johto, 1000);
    expect(pokemonMap).toEqual({
      isWeighted: true,
      isDireced: false,
      vertices: [
        { data: "kanto", edges: [{ start: kanto, end: johto, weight: 1000 }] },
        { data: "johto", edges: [{ start: johto, end: kanto, weight: 1000 }] },
      ],
    });
    pokemonMap.print();
    //"start: kanto ---> end: johto 1000"
    //"start: johto ---> end: kanto 1000"
  });
  `;

export default Graph;
