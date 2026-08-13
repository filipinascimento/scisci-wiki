# Front-page patent-reference scope

## Summary

Front-page patent-reference scope is the coverage caveat that patent citations to science may include only patent front-page prior-art references and omit scientific references embedded in patent body text.

## Canonical Form

- Unit of analysis: patent reference location, patent front page, in-text patent narrative citation, patent jurisdiction, or patent-paper edge.
- Typical representation: source-location flag, front-page-only caveat, or comparison between front-page and in-text references.
- Validation target: prevent patent-paper link tables from being interpreted as exhaustive measures of inventor reliance on science.
- Empirical signature: adding body-text references changes patent-paper coverage, counts, or field composition.

## Uses in Science of Science

- Qualifies [scientific non-patent references](../datasets/scientific_non_patent_references.md), [patent-paper links](../datasets/patent_paper_links.md), and [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md).
- Helps interpret [patent-science link confidence scores](../measures/patent_science_link_confidence_score.md): a high-confidence front-page match can still miss unlisted in-text science.
- Separates match-quality validation from source-coverage validation in [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md).
- Encourages data builders to preserve reference-location and source-role flags when constructing [patent citation-to-science link tables](../datasets/patent_citation_to_science_link_table.md).

## Operationalization

- Record whether a patent-paper reference came from front-page prior-art lists, patent body text, or another extraction channel.
- Compare counts and field distributions between front-page-only and body-text-inclusive patent references.
- Treat front-page-only datasets as lower-bound or role-specific measures when body-text citations are unavailable.
- Re-run key science-technology conclusions after adding body-text references where possible.

## Evidence and Validations

- Verified full-text evidence from Marx and Fuegi (2020) states that their USPTO non-patent references are likely limited to front-page matter and do not include references embedded within patent narrative text.
- The paper identifies in-text patent citations as an important future extension after constructing front-page patent citations to science.
- The same evidence separates this source-scope issue from matching accuracy: even a well-calibrated front-page link table can miss body-text references.

## Caveats

- Front-page references may be better standardized and easier to validate than body-text references.
- Body-text citation extraction can introduce its own false positives and document-section biases.
- Jurisdictions differ in disclosure duties and examiner practices, so front-page scope is not a universal constant.

## Links

- [scientific non-patent references](../datasets/scientific_non_patent_references.md)
- [patent-paper links](../datasets/patent_paper_links.md)
- [Reliance on Science dataset](../datasets/reliance_on_science_dataset.md)
- [unstructured patent-reference matching](../methods/unstructured_patent_reference_matching.md)
- [patent-science link confidence score](../measures/patent_science_link_confidence_score.md)
- [patent-science precision-recall calibration](patent_science_precision_recall_calibration.md)
- [patent citation source roles](patent_citation_source_roles.md)
- [patent citation-to-science link table](../datasets/patent_citation_to_science_link_table.md)

## References

- Marx, M., & Fuegi, A. (2020). Reliance on science: Worldwide front-page patent citations to scientific articles. *Strategic Management Journal*, 41(9), 1572-1594. https://doi.org/10.1002/smj.3145 [OpenAlex: W2936032879; Dimensions: pub.1126722453; WoS: unknown]

## Metadata

- Concept ID: `front_page_patent_reference_scope`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Marx and Fuegi (2020) (2020)
- Latest seen paper: Marx and Fuegi (2020) (2020)
- Primary reference DOI: `10.1002/smj.3145`
- OpenAlex ID: `W2936032879`
- Dimensions ID: `pub.1126722453`
- SciSciNet ID: `W2936032879`
- Aliases: front-page-only patent references; patent body-text citation omission; patent reference location caveat; front-page PCS coverage
