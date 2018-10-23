import ScatterJS from 'scatterjs-core';
import ScatterEOS from 'scatterjs-plugin-eosjs';
import Eos from 'eosjs';

ScatterJS.plugins( new ScatterEOS() );

const network = {
    blockchain:'eos',
    protocol:'http',
    host: 'jungle.cryptolions.io', // 'nodes.get-scatter.com',
    port: '18888', // 443,
    chainId: '038f4b0fc8ff18a4f0842a8f0564611f6e96e8535901dd45e43ac8691a1c4dca' // 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
}

export var account = "";
export var Scat_login = false;

export const checkLogin = function (){
    new Promise((resolve, reject) => {
        ScatterJS.scatter.connect('My-App').then(connected => {

            if(!connected)
            {
                alert("Please Install the scatter extension");
                return false;
            }
            const scatter = ScatterJS.scatter;
            if(scatter.identity)
            {
                Scat_login = true
                console.log("Scat_login: " + Scat_login)
                resolve (true)
            }
            else
                resolve (false)
        })
    })
}

export var get = function (){
    ScatterJS.scatter.connect('abc').then(connected => {

        if(!connected) return false;

        const scatter = ScatterJS.scatter;
        // account = scatter.identity.accounts.name('chainflux123')
        // console.log("Account: ", account)

        console.log(scatter.identities[0])

        // scatter.getIdentity({accounts:[network]}).then(() => {

        //     account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
            

        //     console.log("Account: ", account)

        // }).catch(error => {
        //     console.error("Error in Scatter: ",error);
        // });
    })
}

export var login = function (){

    ScatterJS.scatter.connect('My-App').then(connected => {

        if(!connected)
        {
            alert("Please Install the scatter extension");
            return false;
        }
        else
        {
            const scatter = ScatterJS.scatter;

            scatter.getIdentity({accounts:[network]}).then(() => {

                account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

                console.log("Account: ", account)
                Scat_login = true;

            }).catch(error => {
                console.error("Error in Scatter: ",error);
            });
        }
    })
}

export var logout = function (){
    ScatterJS.scatter.connect('My-App').then(connected => {

        if(!connected)
        {
            alert("Please Install the scatter extension");
            return false;
        }
        const scatter = ScatterJS.scatter;
        scatter.forgetIdentity()
        Scat_login = false;
        // alert("Successfully logout")
    })
}

export var PostMurmur = function (post, url){
    ScatterJS.scatter.connect('My-App').then(connected => {

        if(!connected)
        {
            alert("Please Install the scatter extension");
            return false;
        }
        else
        {
            console.log("Post: " + post + ", URL: " + url);
            const scatter = ScatterJS.scatter;
            scatter.getIdentity({accounts:[network]}).then(() => {

                const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');

                console.log("Account: ", account)

                const eosOptions = { expireInSeconds:60 };
                const eos = scatter.eos(network, Eos, eosOptions);

                const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };

                eos.transaction('murmurdappco', contract => {
                    // console.log("Account: "+ account.name)
                    contract.murmur(account.name, post, url, 1, transactionOptions);
                  }).then(trx => {
                    console.log(`Transaction ID: ${trx.transaction_id}`);
                }).catch(error => {
                    console.error(error);
                });

                // eos.transfer(account.name, 'helloworld', '0.0100 EOS', 'memo', transactionOptions).then(trx => {
                //     // That's it!
                //     console.log(`Transaction ID: ${trx.transaction_id}`);
                // }).catch(error => {
                //     console.error(error);
                // });

            }).catch(error => {
                console.error("Error in Scatter: ",error);
            });
        }
    });
}