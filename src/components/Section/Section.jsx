import propTypes from "prop-types";
export default function Section({ children, title }) {
  return (
    <section>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: propTypes.string,
};
