<?php
$aantalLijnen = 8;

for ( $i = 0 ; $i < $aantalLijnen ; $i++ ){
    for ($j = 0; $j < $aantalLijnen - $i; $j++){
        print(" ");
    }
    for ($j = 0; $j < $i + 1; $j++ ) {
        print("#");
    }
    for ($j = 0; $j < $i; $j++ ) {
        print("#");
    }
    print("\n");
}