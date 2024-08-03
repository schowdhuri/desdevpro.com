# The End of an Era: My 7-Year Journey with Arch Linux

I finally lost my battle with arch Linux after 7+ years of constant struggle

I hadn't upgraded my installation in over a year. Browsers move so fast these days. Firefox stopped working on streaming sites like prime video. Couldn't update it because arch had switched to a new archive format zStandard, which is a breaking change

Going by the "arch philosophy" of upgrading the whole system instead of one package, I decided to do a full system upgrade (hoped that would add zstd support too). No luck. New installation comes with Linux kernel 5. My old Nvidia GPU doesn't support that

Well, there is the OSS Nouveau driver. I don't do any graphics intensive work on that machine. It should suffice. But more chicken and egg scenarios were in store. Installing nouveau needs zstd support

Ditched Nvidia drivers (goodbye GUI). X stopped working. CLI all the way from here.

There's more! Apparently, most of the GPG keys I had on the keyring are no longer valid. Yes, you can get new keys. If you have zstd support.

I found a binary version of pacman (on a third party site) with zstd support. Manually swapped out my copy of pacman with the new one and updated my keyring. But the package integrity tests continued to fail. Gave up and disabled signature checking (not recommended!!)

After pacman downloaded 4 gigs of packages, it found a bazillion file conflicts and refused to proceed

From pacman's error logs, I compiled a list of conflicting files and wrote a script to move them to a temp location. Tried to install a few packages and it seemed to work.

Last attempt at a full system upgrade - stalled the machine. Did a hard reboot and got a kernel panic! This was the dead end after 3 nights of wrestling with these issues.

Nuked the / and /var directories and installed Manjaro this afternoon. It's a bit bloated compared to arch but it works out of the box. I can live with that. I have a working system now. I can finally get back to work.
