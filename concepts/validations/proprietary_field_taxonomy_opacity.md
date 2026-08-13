# Proprietary field-taxonomy opacity

## Summary

Proprietary field-taxonomy opacity is the validation problem that field-normalized metrics can become hard to audit when their denominators depend on closed or unavailable journal-category systems.

## Canonical Form

- Unit of analysis: field-normalized metric, denominator, journal category, taxonomy provider, article, or benchmark group.
- Typical representation: opacity caveat, closed-taxonomy flag, denominator audit, or transparency comparison.
- Validation target: assess whether users can reconstruct and contest the field definition behind a normalized score.
- Empirical signature: a metric's field denominator depends on proprietary category lists not freely inspectable by all users.

## Uses in Science of Science

- Qualifies [field classifications](../measures/field_classifications.md) used in metrics.
- Supports transparent [reference set construction](../methods/reference_set_construction.md).
- Connects [transparent metric construction](../methods/transparent_metric_construction.md) to field-normalized citation indicators.
- Adds a source-governance layer to [citation database coverage sensitivity](citation_database_coverage_sensitivity.md).

## Operationalization

- Identify the taxonomy used to define comparison fields or denominators.
- Record whether category assignments are public, licensed, proprietary, versioned, and reconstructable.
- Compare closed-taxonomy metrics with open or article-specific field definitions when possible.
- Report how denominator opacity affects reproducibility, contestability, and institutional access.
- Prefer public component disclosure where raw source restrictions prevent full data release.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) compares RCR with a Thomson-Reuters ratio whose denominator is based on journal categories.
- The authors note bibliometric concern that journal categorization is not refined enough for article-level metrics and that proprietary journal category lists render the calculation somewhat opaque.
- They later argue that RCR and iCite are more transparent than citation percentiles and TR ratios, which depend on proprietary journal classifications.

## Caveats

- Proprietary taxonomies can still be high quality or useful when documented.
- Open taxonomies can also be noisy or unstable.
- Opacity is a governance issue distinct from statistical validity.

## Links

- [field classifications](../measures/field_classifications.md)
- [reference set construction](../methods/reference_set_construction.md)
- [transparent metric construction](../methods/transparent_metric_construction.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [relative citation ratio](../measures/relative_citation_ratio.md)
- [metric accessibility and component disclosure](../methods/metric_accessibility_and_component_disclosure.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative citation ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `proprietary_field_taxonomy_opacity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: closed field-taxonomy opacity; proprietary journal-category denominator; opaque field-normalization taxonomy; closed denominator field definition
