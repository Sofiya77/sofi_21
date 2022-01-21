import 'dart:io';
import 'dart:math';

void main(){
  Character person = Character('Анифа', 'мужской', 18, 88);
  person.info();

  Character maga = Character.magomed('мущщина', 19, 90);
  maga.info();
}

class Character {
  String name = '';
  String gender = '';
  int age = 0;
  int weight = 0;

  Character(String name1, String gender1, int age1, int weight1) {
    name = name1;
    gender = gender1;
    age = age1;
    weight = weight1;
  }

  Character.magomed(String gender1,  int age1, int weight1){
    name = 'Магомед';
    gender = gender1;
    age = age1;
    weight = weight1;
  }

  void info(){
    print('Это $name. Его пол $gender. Возраст $age. Вес $weight.');
  }
}