pipeline {
  agent any
    stages {
      stage('One') {
        steps {
          echo "Hi this is Anirudh"
              }
                  }
      stage ('Two') {
        steps {
          input('Do you want to proceed')
              }
                    }
      stage('Three') {
        when {
          not {
            branch "master"
              }
         }
         steps {
          echo "Hello"
               }
            }
       stage('Four') {
        parallel {
          stage('Unit test_1') {
            steps {
              echo "running unit test 1"
                  }
                            }
           stage('Unit test_2') {
            steps {
              echo "Running unit test 2"
              }
                          }
                  }
                }
              }
            }
