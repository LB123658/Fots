#include <iostream>
using namespace std;

int main() {
    int number;

    cout << "Information about FOTS\n1. Story of Fots\n2. List of Fots\n3. Contact info\nEnter the number for which section you want:";
    cin >> number;

    // checks if the number is positive
    if (number == 1) {
        cout << "THE STORY OF FOTS\n\nFood + shots = FOTS\nFots are dry crushed food in shot glasses that you drink.\nIt is drinking and eating cimbined into one - Fotting.\nThe glasses that fots are in are called fot glasses\nTypes of common fots include:\nThe Rispe™ Fot, which is rice crisipies,\nThe Olive Fot, which is crushed olives (one of the only wet fots),\nThe Meat Fot of pulped meat,\nand The Orea Fot made of crushed Oreos.\n\nLearn more about Fots at lb123658.github.io/Fots\n\nMore Fots coming soon...";
    }
    else if (number == 2) {
        cout << "\nList of Fots:\n\n1. Rispe Fot\n2.Cocoa Fot\n3.Olive Fot\n4. Meat Fot\n5. Air Fot";
    }
    else if (number == 3) {
        cout << "\nFots contact info:\n\nWebsite: lb123658.github.io/Fots\nEmail: fotsofficial671@gmail.com";
    }
    else {
        cout << "\nSorry, Fots didn't get that. Please enter one of the options.";
    }
    return 0;
}
