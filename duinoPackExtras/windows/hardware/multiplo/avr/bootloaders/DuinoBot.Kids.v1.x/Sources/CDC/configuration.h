#ifndef _BOOTLOADER_CONFIGURATION__
#define _BOOTLOADER_CONFIGURATION__


// Post download jump type:
// HOT: Keep the CDC open for the following application
// COLD: Close the CDC. The application may use it's own.

// ONLY LEAVE ONE OF THEM UNCOMENTTED

#define _HOT_JUMP_
//#define _COLD_JUMP_

#endif
