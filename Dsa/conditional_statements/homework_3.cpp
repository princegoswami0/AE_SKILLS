#include<iostream>
using namespace std;

int main(){
  // int n; cout<<"Enter the no. ="; cin>>n; int totalSum=0; for(int i=1;i<=n;i++){ if(i%3==0){ totalSum+=i; } } cout<<totalSum<<"this is your answer";
  
  //factorial of a number n ;

  // int n ;
  // cout<<"enter the number n ";
  // cin>>n;

  // int fact = 1;

  // for(int i=1; i<=n; i++){
  //   fact*=i;
  // }

  // cout<<fact;


// int n = 5;
// int sum= 0 ;


// for (int i=0; i<n; i++){
// 	for (int j=0; j<n ; j++){
// 		sum+=1;
// 		cout<<sum <<" ";
// 	}
// 	cout<<endl;
// }
		

// Q is 
// A B C
// D E F
// G H I 

// here is the question 

// ABC
// DEF
// GHI

// # include<iostream>
// using namespace std;

// int main (){
	int n;
	cout <<"enter the number = ,";
	cin >> n;
	
	char alpha = 'A';
	for (int i=0; i < n; i++){
		for (int j = 0 ; j<n ; j++){
			cout << alpha << " ";
			alpha++; // 65+1=66 => implicit conversion and store in the char that makes it B. and so on .
		}
		cout<<endl;
	}

	cout<< "after pattern: "<<alpha;
// 	return 0;
// }
  return 0;
}