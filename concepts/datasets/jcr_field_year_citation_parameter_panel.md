# JCR field-year citation parameter panel

## Summary

JCR field-year citation parameter panel is a dataset representation in which Journal Citation Reports categories and years are paired with article counts, mean citations, maximum citations, and distribution-fit diagnostics.

## Canonical Form

- Unit of analysis: field-year, JCR subject category, document set, citation count, or distribution parameter.
- Typical representation: table of `field`, `year`, `N`, `c0`, maximum citation count, and fit-quality fields.
- Dataset target: make field normalization and citation-distribution collapse auditable.
- Empirical signature: field-year baselines are stored explicitly rather than embedded only in fitted plots.

## Uses in Science of Science

- Provides the dataset layer for [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md).
- Supports [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md) and distribution-fit checks.
- Connects to [reference set construction](../methods/reference_set_construction.md).
- Makes normalization reproducible for Web of Science or JCR-derived field categories.

## Operationalization

- Select JCR categories and publication years.
- Count eligible articles in each field-year cell.
- Compute mean citations, maximum citations, and normalized citation variables.
- Store fit diagnostics for proposed universal or lognormal curves.

## Evidence and Validations

- Verified full-text evidence from Radicchi et al. (2008) reports field-by-field citation parameters for JCR categories.
- The paper uses article counts, average citations, maximum citations, and curve-fit information to support field-normalized comparison.
- These tables act as a reproducible parameter panel behind the normalization argument.

## Caveats

- JCR categories can be broad, overlapping, and journal-centered rather than article-centered.
- Field-year panels inherit citation-window and document-type choices.
- Parameter tables can become stale as database coverage and citation practices change.

## Links

- [field-year citation baseline c0](../measures/field_year_citation_baseline_c0.md)
- [lognormal relative-citation curve](../validations/lognormal_relative_citation_curve.md)
- [reference set construction](../methods/reference_set_construction.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Web of Science](web_of_science.md)

## References

- Radicchi, F., Fortunato, S., & Castellano, C. (2008). Universality of citation distributions: Toward an objective measure of scientific impact. *Proceedings of the National Academy of Sciences*, 105(45), 17268-17272. https://doi.org/10.1073/pnas.0806977105 [OpenAlex: W2151866568; Dimensions: pub.1052550373; SciSciNet: W2151866568]

## Metadata

- Concept ID: `jcr_field_year_citation_parameter_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Radicchi et al. (2008) (2008)
- Latest seen paper: Radicchi et al. (2008) (2008)
- Primary reference DOI: `10.1073/pnas.0806977105`
- OpenAlex ID: `W2151866568`
- Dimensions ID: `pub.1052550373`
- SciSciNet ID: `W2151866568`
- Aliases: JCR normalization parameter panel; field-year citation table; JCR citation baseline panel; citation-distribution parameter dataset
