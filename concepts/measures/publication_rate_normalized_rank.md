# Publication-rate normalized rank

## Summary

Publication-rate normalized rank rescales an author's publication rank by the average number of publications per author in the relevant field, so productivity differences across disciplines do not dominate author metrics.

## Canonical Form

- Unit of analysis: author, publication rank, field, publication-year cohort, or author publication-count distribution.
- Typical representation: r/N0, where r is rank in an author's ordered paper list and N0 is the field average number of publications per author.
- Measurement target: productivity-normalized author rank for cross-field citation metrics.
- Empirical signature: publication-count distributions from different fields align better after dividing publication counts or ranks by N0.

## Uses in Science of Science

- Supplies the productivity side of the [field-normalized h-index](field_normalized_h_index.md).
- Separates field differences in publication rates from differences in citation performance.
- Links author-level evaluation to [field-normalized citation impact](field_normalized_citation_impact.md) without treating all fields as equally publication-intensive.
- Provides a reusable covariate for cross-field author and group comparisons.

## Operationalization

- Assign authors and papers to fields under a documented taxonomy and year.
- Compute N0, the average number of publications per author in the field and year.
- Rank an author's papers by a normalized citation measure such as c_f.
- Divide rank r by N0 before comparing it with normalized citation performance.
- Report how coauthored papers, multi-field papers, and database coverage are handled.

## Evidence and Validations

- Verified full-text evidence from Radicchi, Fortunato, and Castellano (2008) shows that the average number of articles published by an author in a year differs across disciplines.
- The paper reports that publication-count distributions become more comparable when N is divided by the field average N0.
- Radicchi et al. use this scaling to define the generalized h-index h_f, comparing c_f to reduced rank r/N0.
- Their example shows how an author with six papers can receive h_f = 1.5 when ranks are divided by N0 = 2.0.

## Caveats

- Publication rates depend on database coverage, document-type filters, field taxonomy, coauthorship norms, and career stage.
- N0 is field-level productivity normalization, not a contribution-share measure.
- Multi-field authors require transparent treatment of papers assigned to multiple baselines.

## Links

- [field-normalized h-index](field_normalized_h_index.md)
- [relative citation performance c_f](relative_citation_performance_cf.md)
- [h-index](h_index.md)
- [field-normalized citation impact](field_normalized_citation_impact.md)
- [responsible metrics](responsible_metrics.md)
- [document-type citation filtering](../methods/document_type_citation_filtering.md)
- [field-classification sensitivity](../validations/field_classification_sensitivity.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; WoS: unknown]

## Metadata

- Concept ID: `publication_rate_normalized_rank`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: r over N0; reduced publication rank; field-normalized publication rank; publication-rate normalization
