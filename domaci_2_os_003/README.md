# VTS-TestiranjeSoftvera2024

## Uputstvo za nameštanje Qase login parametara

1. Napravite nalog na [Qase aplikaciji](https://app.qase.io/login). Bitno je da se prijava ne vrši preko Googla, već da se koristi link "Create an account" na dnu forme za kreiranje novog naloga. Važno je koristiti validnu email adresu, jer je potrebno da se email adresa verifikuje.
2. Nakon što ste uspešno kreairali nalog, otvorite fajl `cypress.env.json` i unesite `qase_email` i `qase_password` koje ste koristili prilikom kreiranja naloga.
3. Nakon uspešnog podešavanja paratemara, testovi bi trebalo da se izvršavaju bez grešaka.

Primer `cypress.env.json` fajla:

```json
{
  "qase_email": "petarpetrovic@gmail.com",
  "qase_password": "TajnaSifra"
}
```
