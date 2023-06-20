import { Component, OnInit, HostListener } from '@angular/core';
import { Web3Auth } from '@web3auth/modal';
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { debounceTime, throttleTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';


const clientId = "BEzcnC1kS6_BFOhuK483yjqEcvT4daAZqnNv7Sz-20VOrr-aLkiACUG4S4VubEZkESi4XWp1NdBvwCTii69aIb0";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ opacity: 0 }),
        animate('0.8s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {

  routeIndex = 0;
  routesOrder = ['', 'analisis', 'partners', 'roadmap', 'team', 'contacto'];
  scrollEvent = new Subject();

  private web3auth: Web3Auth;
  provider: SafeEventEmitterProvider | null = null;
  connectButtonText: string = "Conectar";

  constructor(private router: Router) {

    this.scrollEvent.pipe(debounceTime(200)).subscribe((direction) => this.navigate(direction));

    this.web3auth = new Web3Auth({
      clientId, // Get your Client ID from Web3Auth Dashboard
      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x1",
        rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
      },
      //web3AuthNetwork: "cyan",
    });
  }

  @HostListener('window:wheel', ['$event'])
  onWindowScroll(e:any) {
    if (e.deltaY > 0) {
      this.scrollEvent.next('down');
    } else {
      this.scrollEvent.next('up');
    }
  }

  navigate(direction:any) {
    if (direction === 'down' && this.routeIndex < this.routesOrder.length - 1) {
      this.routeIndex++;
    } else if (direction === 'up' && this.routeIndex > 0) {
      this.routeIndex--;
    }
    this.router.navigateByUrl(this.routesOrder[this.routeIndex]);
  }

  async ngOnInit() {
    try {
      const openloginAdapter = new OpenloginAdapter({
        adapterSettings: {
          clientId,
          network: "testnet",
          uxMode: "redirect",
        },
      });

      this.web3auth.configureAdapter(openloginAdapter);
      await this.web3auth.initModal();
      if (this.web3auth.provider) {
        this.provider = this.web3auth.provider;
        console.log(this.provider)
        const user = await this.web3auth.getUserInfo();
        console.log(user);
        const id_token = await this.web3auth.authenticateUser();
        console.log(id_token);
        this.connectButtonText = "Desconectar";
      }
      // You can perform additional actions or handle the result of the authentication here
    } catch (error) {
      // Handle the error here
      console.error("Error occurred during Web3 authentication:", error);
      // You can display an error message to the user or perform other error handling tasks
    }


  }
  async executeWeb3Auth() {


    if (this.provider) {
      await this.web3auth.logout();
      this.provider = this.web3auth.provider;
      console.log("logout")
      this.connectButtonText = "Conectar";
    } else {
      await this.web3auth.connect();
      this.provider = this.web3auth.provider;
      console.log("login")
      const user = await this.web3auth.getUserInfo();
      console.log(user);
    }

    //await this.web3auth.logout();
  }

  title = 'web-app';
}
