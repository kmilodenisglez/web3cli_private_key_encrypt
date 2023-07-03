#! /usr/bin/env node
const figlet = require("figlet");
const fs = require('fs');
const {resolve} = require('path');
// Import commander
const {Command, createCommand} = require('commander');
const Web3 = require("web3");
const program = new Command();

figlet('wallet-cli', function (err, data) {
    console.log(data)
    // Declare program name and description
    program
        .name('wallet')
        .usage("0x3f04bc802065ce300ca91f526127a12cf24e04a9cf2aef68f8758921d1f71d97 mypasswd")
        .description('CLI to generate private key ciphered.')
        .version('1.0.0', '-v')

    // Help options
    program.command('wallet')
        .description('Generate private-key ciphered')
        .argument('<private_key>', 'The private key to encrypt.')
        .argument('<passwd>', 'The password used for encryption.')
        .action((private_key, passwd) => {
            try {
                const _web3 = new Web3();
                let pvkEncrypt = _web3.eth.accounts.encrypt(private_key, passwd);
                const data = JSON.stringify(pvkEncrypt);
                let buff = new Buffer.from(data);
                let result = buff.toString('base64');
                let resultPath = resolve(__dirname,'../result.txt');
                try {
                    fs.writeFileSync(resultPath, result);
                    // file written successfully
                } catch (err) {
                    console.error(err);
                }
                console.log(`\n **** Copy the content from ${resultPath} file **** \n`)
            } catch (err) {
                console.log(err)
            }
        })

    program.parse();

});
