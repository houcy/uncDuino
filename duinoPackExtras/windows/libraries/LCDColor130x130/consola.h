/*

Consola Font definition for Graphic class
Federico Lanza for Robotgroup

Apr, 2012

*/

#ifndef CONSOLA_H
#define CONSOLA_H

#include "fontdef.h"

#define CONSOLA_HEIGHT    11

uint8_t Consola_Charmap[] = 
{
  0x00, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x00, 0x80, 0x00, 0x00, 
  0x00, 0xA0, 0xA0, 0xA0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x28, 0x28, 0xFC, 0x28, 0xFC, 0x50, 0x50, 0x00, 0x00, 
  0x00, 0x20, 0x70, 0xA0, 0xA0, 0x70, 0x28, 0x48, 0xF0, 0x40, 0x00, 
  0x00, 0xE4, 0xA8, 0xF0, 0x10, 0x20, 0x5C, 0x54, 0x9C, 0x00, 0x00, 
  0x00, 0x70, 0x50, 0x50, 0x60, 0xE8, 0x98, 0x88, 0x7C, 0x00, 0x00, 
  0x00, 0x80, 0x80, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x20, 0x40, 0x40, 0x80, 0x80, 0x80, 0x80, 0x40, 0x40, 0x20, 
  0x00, 0x80, 0x40, 0x40, 0x20, 0x20, 0x20, 0x20, 0x40, 0x40, 0x80, 
  0x00, 0x20, 0xA8, 0x70, 0xA8, 0x20, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x20, 0x20, 0xF8, 0x20, 0x20, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x60, 0x60, 0x60, 0xC0, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xE0, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0xC0, 0x00, 0x00, 
  0x00, 0x08, 0x10, 0x10, 0x20, 0x20, 0x20, 0x40, 0x40, 0x80, 0x00, 
  0x00, 0x00, 0x70, 0x88, 0x98, 0xA8, 0xC8, 0x88, 0x70, 0x00, 0x00, 
  0x00, 0x00, 0x60, 0xA0, 0x20, 0x20, 0x20, 0x20, 0xF8, 0x00, 0x00, 
  0x00, 0x00, 0x70, 0x88, 0x08, 0x10, 0x20, 0x40, 0xF8, 0x00, 0x00, 
  0x00, 0x00, 0xE0, 0x10, 0x10, 0x60, 0x10, 0x10, 0xE0, 0x00, 0x00, 
  0x00, 0x00, 0x18, 0x28, 0x48, 0x88, 0xFC, 0x08, 0x08, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x80, 0x80, 0xE0, 0x10, 0x10, 0xE0, 0x00, 0x00, 
  0x00, 0x00, 0x70, 0xC0, 0x80, 0xF0, 0x88, 0x88, 0x70, 0x00, 0x00, 
  0x00, 0x00, 0xF8, 0x08, 0x10, 0x10, 0x20, 0x20, 0x40, 0x00, 0x00, 
  0x00, 0x00, 0x70, 0x88, 0xC8, 0x70, 0x98, 0x88, 0x70, 0x00, 0x00, 
  0x00, 0x00, 0x70, 0x88, 0x88, 0x78, 0x08, 0x10, 0xE0, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0xC0, 0xC0, 0x00, 0x00, 0xC0, 0xC0, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x60, 0x60, 0x00, 0x00, 0x60, 0x60, 0x60, 0xC0, 
  0x00, 0x00, 0x00, 0x20, 0x40, 0x80, 0x80, 0x40, 0x20, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0xF8, 0x00, 0xF8, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x80, 0x40, 0x20, 0x20, 0x40, 0x80, 0x00, 0x00, 
  0x00, 0xC0, 0x60, 0x20, 0x20, 0xC0, 0x80, 0x00, 0x80, 0x00, 0x00, 
  0x00, 0x38, 0x4C, 0x44, 0x94, 0xB4, 0xB4, 0xB8, 0x80, 0x40, 0x78, 
  0x00, 0x00, 0x20, 0x50, 0x50, 0x50, 0xF8, 0x88, 0x88, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x88, 0x88, 0xF0, 0x88, 0x88, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0x70, 0xC0, 0x80, 0x80, 0x80, 0xC0, 0x70, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x98, 0x88, 0x88, 0x88, 0x98, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x80, 0x80, 0xF0, 0x80, 0x80, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x80, 0x80, 0xF0, 0x80, 0x80, 0x80, 0x00, 0x00, 
  0x00, 0x00, 0x78, 0x40, 0x80, 0x98, 0x88, 0xC8, 0x78, 0x00, 0x00, 
  0x00, 0x00, 0x90, 0x90, 0x90, 0xF0, 0x90, 0x90, 0x90, 0x00, 0x00, 
  0x00, 0x00, 0xF8, 0x20, 0x20, 0x20, 0x20, 0x20, 0xF8, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x10, 0x10, 0x10, 0x10, 0x10, 0xE0, 0x00, 0x00, 
  0x00, 0x00, 0x90, 0xA0, 0xA0, 0xC0, 0xA0, 0xA0, 0x90, 0x00, 0x00, 
  0x00, 0x00, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0x48, 0x48, 0xB4, 0xB4, 0x84, 0x84, 0x84, 0x00, 0x00, 
  0x00, 0x00, 0x90, 0xD0, 0xD0, 0xD0, 0xB0, 0xB0, 0x90, 0x00, 0x00, 
  0x00, 0x00, 0x78, 0xCC, 0x84, 0x84, 0x84, 0xCC, 0x78, 0x00, 0x00, 
  0x00, 0x00, 0xF0, 0x88, 0x88, 0xF0, 0x80, 0x80, 0x80, 0x00, 0x00, 
  0x00, 0x00, 0x70, 0xC8, 0x88, 0x88, 0x88, 0x98, 0x70, 0x20, 0x18, 
  0x00, 0x00, 0xE0, 0x90, 0x90, 0xE0, 0xA0, 0x90, 0x88, 0x00, 0x00, 
  0x00, 0x00, 0x78, 0x80, 0x80, 0x70, 0x08, 0x08, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0xF8, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x00, 0x00, 
  0x00, 0x00, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x70, 0x00, 0x00, 
  0x00, 0x00, 0x88, 0x88, 0x88, 0x50, 0x50, 0x50, 0x20, 0x00, 0x00, 
  0x00, 0x00, 0x84, 0x84, 0x84, 0xB4, 0x78, 0x58, 0x48, 0x00, 0x00, 
  0x00, 0x00, 0x84, 0x48, 0x30, 0x30, 0x30, 0x48, 0xCC, 0x00, 0x00, 
  0x00, 0x00, 0x82, 0x44, 0x28, 0x10, 0x10, 0x10, 0x10, 0x00, 0x00, 
  0x00, 0x00, 0xF8, 0x10, 0x10, 0x20, 0x40, 0x40, 0xF0, 0x00, 0x00, 
  0x00, 0xE0, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0xE0, 
  0x00, 0x80, 0x40, 0x40, 0x20, 0x20, 0x20, 0x10, 0x10, 0x08, 0x00, 
  0x00, 0xE0, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0xE0, 
  0x00, 0x00, 0x40, 0xA0, 0xA0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFC, 
  0xC0, 0x60, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x70, 0x08, 0x78, 0x88, 0x98, 0x78, 0x00, 0x00, 
  0x00, 0x80, 0x80, 0xF0, 0xC8, 0x88, 0x88, 0x88, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x70, 0xC0, 0x80, 0x80, 0x80, 0x70, 0x00, 0x00, 
  0x00, 0x08, 0x08, 0x78, 0x88, 0x88, 0x88, 0x98, 0x68, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x70, 0x88, 0xF8, 0x80, 0xC0, 0x78, 0x00, 0x00, 
  0x00, 0x1C, 0x20, 0x20, 0xF8, 0x20, 0x20, 0x20, 0x20, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x7C, 0x88, 0x88, 0xF0, 0x80, 0xF8, 0x88, 0xF0, 
  0x00, 0x80, 0x80, 0xF0, 0x90, 0x90, 0x90, 0x90, 0x90, 0x00, 0x00, 
  0x00, 0x30, 0x00, 0xE0, 0x20, 0x20, 0x20, 0x20, 0xF0, 0x00, 0x00, 
  0x00, 0x30, 0x00, 0xF0, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0xE0, 
  0x00, 0x80, 0x80, 0x90, 0xA0, 0xC0, 0xC0, 0xA0, 0x90, 0x00, 0x00, 
  0x00, 0xE0, 0x20, 0x20, 0x20, 0x20, 0x20, 0x20, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0xF8, 0xA8, 0xA8, 0xA8, 0xA8, 0xA8, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0xF0, 0x90, 0x90, 0x90, 0x90, 0x90, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x70, 0x88, 0x88, 0x88, 0x88, 0x70, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0xF0, 0xC8, 0x88, 0x88, 0x88, 0xF0, 0x80, 0x80, 
  0x00, 0x00, 0x00, 0x78, 0x88, 0x88, 0x88, 0x98, 0x68, 0x08, 0x08, 
  0x00, 0x00, 0x00, 0xF0, 0x90, 0x80, 0x80, 0x80, 0x80, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x70, 0x80, 0xC0, 0x30, 0x10, 0xE0, 0x00, 0x00, 
  0x00, 0x20, 0x20, 0xF8, 0x20, 0x20, 0x20, 0x20, 0x38, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x90, 0x90, 0x90, 0x90, 0x90, 0xF0, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x88, 0x88, 0x88, 0x50, 0x50, 0x20, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x84, 0xA8, 0xA8, 0xB8, 0xD8, 0x48, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0xCC, 0x48, 0x30, 0x30, 0x48, 0xCC, 0x00, 0x00, 
  0x00, 0x00, 0x00, 0x44, 0x44, 0x48, 0x28, 0x30, 0x10, 0x20, 0xE0, 
  0x00, 0x00, 0x00, 0xF0, 0x20, 0x20, 0x40, 0x40, 0xF0, 0x00, 0x00, 
  0x00, 0x30, 0x20, 0x20, 0x20, 0xC0, 0x20, 0x20, 0x20, 0x20, 0x30, 
  0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 0x80, 
  0x00, 0xC0, 0x40, 0x40, 0x40, 0x30, 0x40, 0x40, 0x40, 0x40, 0xC0, 
  0x00, 0x00, 0x00, 0x00, 0x00, 0xE8, 0xB8, 0x00, 0x00, 0x00, 0x00
};

struct CharDescriptor Consola_Descriptors[] =
{
  {1, 0}, {3, 11}, {6, 22}, {5, 33}, {6, 44}, {6, 55},
  {1, 66}, {3, 77}, {3, 88}, {5, 99}, {5, 110}, {3, 121},
  {3, 132}, {2, 143}, {5, 154}, {5, 165}, {5, 176}, {5, 187},
  {4, 198}, {6, 209}, {4, 220}, {5, 231}, {5, 242}, {5, 253},
  {5, 264}, {2, 275}, {3, 286}, {3, 297}, {5, 308}, {3, 319},
  {3, 330}, {6, 341}, {5, 352}, {5, 363}, {4, 374}, {5, 385},
  {4, 396}, {4, 407}, {5, 418}, {4, 429}, {5, 440}, {4, 451},
  {4, 462}, {4, 473}, {6, 484}, {4, 495}, {6, 506}, {5, 517},
  {5, 528}, {5, 539}, {5, 550}, {5, 561}, {5, 572}, {5, 583},
  {6, 594}, {6, 605}, {7, 616}, {5, 627}, {3, 638}, {5, 649}, 		
  {3, 660}, {3, 671}, {6, 682}, {3, 693}, {5, 704}, {5, 715},
  {4, 726}, {5, 737}, {5, 748}, {6, 759}, {6, 770}, {4, 781},
  {4, 792}, {4, 803}, {4, 814}, {4, 825}, {5, 836}, {4, 847},
  {5, 858}, {5, 869}, {5, 880}, {4, 891}, {4, 902}, {5, 913},
  {4, 924}, {5, 935}, {6, 946}, {6, 957}, {6, 968}, {4, 979},
  {4, 990}, {1, 1001}, {4, 1012}, {5, 1023}
};

#endif
