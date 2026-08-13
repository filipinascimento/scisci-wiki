# Page-Reference Count Recency Control

## Summary

Page-reference count recency control adjusts citation-age models for article length and reference-list size so that more recent references are not merely an artifact of shorter articles or fewer references.

## Canonical Form

- Unit of analysis: citing article, citation-year model, reference-list age, page count, or reference count.
- Typical representation: regression controls for pages and number of references.
- Mechanism or measurement target: format-driven truncation of reference depth.
- Empirical signature: longer articles and articles with more references tend to cite older work, so citation-age effects should control for these variables.

## Uses in Science of Science

- Strengthens inference about [reference-age search depth](../measures/reference_age_search_depth.md).
- Complements [title-word age recency control](title_word_age_recency_control.md).
- Controls a related risk in [reference-list length growth confound](../validations/reference_list_length_growth_confound.md).
- Supports robustness checks for [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md).

## Operationalization

- Add citing-article page count to citation-age or reference-age models.
- Add citing-article reference count to control for bibliography capacity.
- Interpret online-availability effects after checking whether pages and references explain citation recency.
- Report whether article-length and reference-count coefficients point toward deeper or shallower cited work.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) states that all regression models controlled alternative explanations for more recent citations.
- Evans included average pages and average number of references in citing articles to account for shorter articles, fewer references, and possible publisher censoring of earlier references.
- The paper reports that articles with more references referred to earlier work, supporting the need for this control.

## Caveats

- Page and reference counts do not directly observe search behavior.
- Format controls can absorb some substantive variation in article type or field norms.
- The control should be paired with topical and field controls when available.

## Links

- [reference-age search depth](../measures/reference_age_search_depth.md)
- [title-word age recency control](title_word_age_recency_control.md)
- [reference-list length growth confound](../validations/reference_list_length_growth_confound.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [expanding citation-window sweep](expanding_citation_window_sweep.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; SciSciNet: W2125660293; WoS: unknown]

## Metadata

- Concept ID: `page_reference_count_recency_control`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: page and reference controls; reference-age format controls; article length recency control; bibliography-size citation-age control
