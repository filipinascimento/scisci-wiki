# Supporting-online-material reference omission

## Summary

Supporting-online-material reference omission is the validation caveat that citation indexes can miss references placed in online supplements rather than in the indexed main article.

## Canonical Form

- Unit of analysis: article, supporting online material, supplemental reference list, indexed reference, omitted reference, or journal policy.
- Typical representation: main-text versus supplement reference audit, citation-index missing-reference flag, or supplement-inclusive reference reconstruction.
- Validation target: assess whether citation-age, breadth, and concentration outcomes are biased by references omitted from the indexed record.
- Empirical signature: references in supplemental methods or appendices differ in age, diversity, or source type from references indexed in the article record.

## Uses in Science of Science

- Qualifies [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md) and other citation-index panels.
- Provides a source-coverage check for [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md).
- Connects to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) when omitted references are systematic.
- Matters for studies of [reference-age search depth](../measures/reference_age_search_depth.md), [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md), and [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md).

## Operationalization

- Identify journals and periods where methods references were moved to online supplements.
- Extract reference lists from supplements and compare them with citation-indexed references.
- Measure whether omitted references are older, more diverse, more technical, or less central than indexed references.
- Recompute citation age, breadth, concentration, and field-normalized indicators with supplement-inclusive references where feasible.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) notes that journals such as *Science* use Supporting Online Material for Materials and Methods.
- Evans states that these supplemental sections frequently include references not indexed by the Citation Index.
- The paper identifies this as a limitation because omitted references could theoretically point to earlier or more diverse articles.
- Evans judges that possibility unlikely to overturn the results, but the caveat remains important for citation-panel replications.

## Caveats

- The direction of bias is empirical: supplement references may be older methods, data resources, software, or highly technical recent work.
- Supplement practices differ by journal, field, and time period.
- Modern publishers may expose supplement references through Crossref, PubMed, or platform metadata unevenly.

## Links

- [CI-FSO online availability panel](../datasets/ci_fso_online_availability_panel.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [reference-age search depth](../measures/reference_age_search_depth.md)
- [citation breadth via distinct cited sources](../measures/citation_breadth_distinct_sources.md)
- [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `supporting_online_material_reference_omission`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: supplement reference omission; SOM citation-index omission; supplemental methods reference loss; online supplement citation coverage
