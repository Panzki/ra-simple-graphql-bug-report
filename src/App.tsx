import buildGraphQLProvider from "ra-data-graphql-simple";
import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";

function App() {
  const [dataProvider, setDataProvider] = React.useState<any | null>(null);

  React.useEffect(() => {
    buildGraphQLProvider({
      clientOptions: { uri: "http://localhost:4000" },
    }).then((provider) => setDataProvider(provider));
  }, []);

  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="Post" list={ListGuesser} />
    </Admin>
  );
}

export default App;
