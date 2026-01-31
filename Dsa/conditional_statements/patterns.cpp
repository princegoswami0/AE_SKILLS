#include <iostream>
using namespace std;

int main()
{
  // int n =4;
  // char ch= 'A';

  // for(int i = 0; i<n ; i++){
  //   for(int j = 0; j <i ; j++){
  //     cout << " ";
  //   }

  //   for(int j =0; j<n-i; j++){
  //   cout << char('A' + i);
  //   }
  //   // ch++;
  //   cout<<endl;
  // }

  // PYRAMID PATTERN /////////////

  // int n =4;

  // for (int i =0 ; i<n; i++){
  //   //spaces

  //   for (int j = 0 ; j < n-i-1 ; j++){
  //     cout << " ";
  //   }

  //   // increasing nuumbers

  //   for ( int j = 0 ; j < i+1 ; j++){
  //     cout << (j+1);
  //   }

  //   //decreasing

  //   for(int j = i ; j>=1 ; j--){
  //     cout<< j;
  //   }
  //   cout<<endl;
  // }

  ////////////////////////////////

  // Hollow diamond patttern

  int n = 4;

  for (int i = 0; i < n; i++){
    // spaces

    for (int j = 0; j < n - i - 1; j++){
      cout << " ";
    }

    cout<<"*";

    if (i!=0){
      //spaces
      for(int j=0; j<2*i-1; j++){
        cout<< " ";
      }
      
      cout<< "*";
    }
    cout<<endl;
  }

  for(int i=0; i<n-1;i++){
        // spaces

    for (int j = 0; j < i+1; j++){
      cout << " ";
    }

    cout<<"*";

    if(i != n-2){
      for(int j =0; j<2*(n-i)-5;j++){
          cout<< " ";
      }
      cout<< "*";
    }
    cout<<endl;
  }
  return 0;
}
