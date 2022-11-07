pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                bash 'curl -fsSL https://get.pnpm.io/install.sh | bash -'
                
            }
        }
    }
}

