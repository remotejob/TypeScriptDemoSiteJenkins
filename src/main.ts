import './style.css'
import { setupCounter } from './counter'
import { setupDomain } from './getdomain'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="/typescript.png" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <img src="/Go-Logo_Aqua.png" class="logo vanilla" alt="TypeScript logo" />
    <img src="/rust-logo-512x512.png" class="logo vanilla" alt="TypeScript logo" />
    <h1 id='title'></h1>

    <h2>TypeScript + GoLang/RUST + Docker + K8s</h2>
    <h2>DEVELOPMENT</h2>

  <table>
  <tr>
    <th>Items</th>
    <th>Description</th>
    <th>Technology</th>
    <th>Sources</th>
  </tr>
  <tr>
    <td>FRONTEND</td>
    <td>Used Vite for creation </br><a href="https://vitejs.dev">https://vitejs.dev</a></td>
    <td>TypeScript</td>
    <td><a href="https://gitlab.com/remotejob/tapescriptdemosite">https://gitlab.com/remotejob/typescriptdemosite</a></td>
  </tr>
  <tr>
    <td>BACKEND</td>
    <td>2 variants of static files support</td>
    <td>GOLANG/RUST</td>
    <td><a href="https://gitlab.com/remotejob/k8staticservergolang">https://gitlab.com/remotejob/k8staticservergolang</a></br><a href="https://gitlab.com/remotejob/rustwebserver">https://gitlab.com/remotejob/rustwebserver</a></td>
  </tr>
  <tr>
    <td>DOCKER</td>
    <td>Cross compiling for AMD64 and ARM64</td>
    <td>New docker BUILDX option</td>
    <td><a href="https://hub.docker.com/r/remotejob/k8staticservergolang">https://hub.docker.com/r/remotejob/k8staticservergolang</a></br><a href="https://hub.docker.com/r/remotejob/rustwebserver">https://hub.docker.com/r/remotejob/rustwebserver</a></td>
  </tr> 
  <tr>
    <td>KUBERNATES</td>
    <td>Claster created using https://oracle.com resources</td>
    <td>Cluster across multiple clouds using WireGuard. 4 Nodes splited in two locations Sweaden/Danmark</td>
    <td><a href="https://gitlab.com/remotejob/edgecenter">https://gitlab.com/remotejob/edgecenter</a></br><a href="https://www.wireguard.com">https://www.wireguard.com</a></td>
  </tr> 
</table>
<h2>DEPLOYMENT</h2>
<table>
<tr>
  <th>Items</th>
  <th>Description</th>
  <th>Technology</th>
  <th>Sources</th>
</tr>
<tr>
  <td>CI/CD</td>
  <td>Deployment logic in .gitlab-ci.yml file</a></td>
  <td>Used internal GitLab Technology </br><a href="https://docs.gitlab.com/ee/ci/">https://docs.gitlab.com/ee/ci</td>
  <td><a href="https://gitlab.com/remotejob/tapescriptdemosite">https://gitlab.com/remotejob/typescriptdemosite</a></td>
</tr>

</table>

    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
setupDomain(document.querySelector<HTMLButtonElement>('h1')!)
