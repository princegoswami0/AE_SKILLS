#include<iostream>
using namespace std;

int main(){
  int n;
  cout<<"enter the no =";
  cin>>n;
  bool isPrime = true;


  for (int i = 2; i*i<=n ; i++){
    if (n%i==0){
      isPrime = false;
      break;
    }
  }

  if (isPrime){
    cout << n << " is prime no"<< endl;
  }else{
    cout<< n << "is not primeno"<< endl; 
  }

  return 0;
}