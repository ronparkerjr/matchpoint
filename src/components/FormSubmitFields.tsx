type Props = { subject: string; formType: string };

/** Provider configuration shared by every first-party website form. */
export default function FormSubmitFields({ subject, formType }: Props) {
  return (
    <>
      <input type="hidden" name="_subject" value={subject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="formType" value={formType} />
      <input type="hidden" name="sourcePage" value={window.location.origin + window.location.pathname} />
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
    </>
  );
}
