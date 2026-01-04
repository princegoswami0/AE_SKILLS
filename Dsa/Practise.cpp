#include<iostream>
using namespace std;

int main(){
  int n = 6;
  bool isPrime = true;
  for (int i = 2; i<n ; i++){
    if(n%i==0){
      isPrime=false;
      break;
    }
  }
  
if(isPrime){
  cout<<"prime no\n";
}else{
  cout<<"not prime no";
}
  return 0;
}
