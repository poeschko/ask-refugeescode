const ADMIN_EMAILS = [
  'stefan.steinberger@aon.at',
  'mr.enthusiasmus@hotmail.com',
  'flo.w.schwarz96@gmail.com',
  'jan.poeschko@gmail.com',
];

export default function canEdit(user) {
  return user && ADMIN_EMAILS.indexOf(user.email) >= 0;
}
