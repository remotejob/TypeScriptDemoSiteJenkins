podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: maven
        image: maven:3.8.1-jdk-8
        command:
        - sleep
        args:
        - 99d
      - name: golang
        image: golang:1.16.5
        command:
        - sleep
        args:
        - 99d
''') {
  node(POD_LABEL) {
    stage('Get a Maven project') {
      git 'https://github.com/jenkinsci/kubernetes-plugin.git'
      container('maven') {
        stage('Build a Maven project') {
          sh 'mvn -B -ntp clean install'
        }
      }
    }

    stage('Get a Golang project') {
      git url: 'https://github.com/hashicorp/terraform-provider-google.git', branch: 'main'
      container('golang') {
        stage('Build a Go project') {
          sh '''
            mkdir -p /go/src/github.com/hashicorp
            ln -s `pwd` /go/src/github.com/hashicorp/terraform
            cd /go/src/github.com/hashicorp/terraform && make
          '''
        }
      }
    }

  }
}




// podTemplate(yaml: '''
// apiVersion: v1
// kind: Pod
// metadata:
//   name: node
//   labels:
//     app: node
// spec:
//   containers:
//   - image: node:latest
//     command:
//       - "sleep"
//       - "604800"
//     imagePullPolicy: IfNotPresent
//     name: ubuntu
//     volumeMounts:
//     - name: volv
//       mountPath: /longhorndisk
//   volumes: 
//   - name: volv
//     persistentVolumeClaim:
//       claimName: longhorn-demoite-pvc

//   restartPolicy: Always

//  ''') {

//     node(POD_LABEL) {

//         stage('Get a Node project') {
//             git url: 'https://github.com/remotejob/TypeScriptDemoSiteJenkins.git', branch: 'main'
//             container('node') {
//                 stage('Build a Node project') {
//                     sh '''                    
//                     pwd                    
//                     curl -fsSL https://get.pnpm.io/install.sh | bash -
//                     export PNPM_HOME="/root/.local/share/pnpm"
//                     export PATH="$PNPM_HOME:$PATH"
//                     /root/.local/share/pnpm/pnpm install
//                     /root/.local/share/pnpm/pnpm build

//                     ls -trl
//                     ls /

 
//                     '''
//                 }
//             }
//         }

//     }
// }

