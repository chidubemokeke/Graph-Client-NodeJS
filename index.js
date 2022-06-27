const { execute } = require("./.graphclient");

const myQuery = gql`
  {
    accounts(first: 5) {
      id
      nftOwned {
        id
      }
    }
    nfts(first: 5) {
      id
      tokenURI
      tokenID
      owner {
        id
      }
    }
  }
`;

async function main() {
  const result = await execute(myQuery, {});
  console.log(result);
}

main();
