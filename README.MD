# cli or wallet cli (generate cipher private key)
cli to encrypt a private key (pvk) using web3 keystore v3 standard.

# Install dependencies
```bash
npm i
```

To encrypt the `pvk` run:
```bash
node .\bin\app.js wallet the_private_key the_password
```
Example:
```bash
node .\bin\app.js wallet 0x3f04bc802065ce300ca91f526127a12cf24e04a9cf2aef68f8758921d1f71d97
```

The output is saved in `./result.txt`