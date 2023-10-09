// core
import React from "react";

export const NutritionTable = ({ slice }) => {
  const data = slice.primary;
  const items = slice.items;

  return (
    <>
      <tbody>
        {items.map((element, index) => {
          return (
            <tr
              key={index}
              className={`product-nutrition__row${element.row_indented ? " product-nutrition__row--indented" : ""}${element.row_large_header ? " product-nutrition__row--large-header" : ""}${element.row_dark_underline ? " product-nutrition__row--dark-underline" : ""}${element.row_no_underline ? " product-nutrition__row--no-underline" : ""}${element.row_bold_text_left ? " product-nutrition__row--bold-text-left" : ""}`}
            >
              <td className="product-nutrition__row-left">{element.row_left}</td>
              <td className="product-nutrition__row-right">{element.row_right}</td>
            </tr>
          );
        })}
        {data.footer.richText.map((element, index) => {
          return <tr key={index} className={`product-nutrition__footer${index === 0 ? " product-nutrition__footer--first" : ""}`}>
                <td colSpan="2">
                  { element.type === "paragraph" && <p> {element.text} </p>}
                  { element.type === "heading3" && <h3> {element.text} </h3>}
                </td>
              </tr>
        })}
      </tbody>
    </>
  );
};
