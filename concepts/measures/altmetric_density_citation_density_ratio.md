# Altmetric density-citation density ratio

## Summary

The altmetric density-citation density ratio compares field-level online attention density with citation density to identify domains where altmetric events are unusually common or sparse relative to citations.

## Canonical Form

- Unit of analysis: field, macro-field, publication set, altmetric source, or citation database sample.
- Typical measure: average altmetric events per paper divided by average citations per paper, often computed by source category.
- Measurement target: relative abundance of online attention versus scholarly citation.
- Empirical signature: fields differ in whether online attention approaches, exceeds, or remains far below citation density.

## Uses in Science of Science

- Extends [altmetric field presence profiles](altmetric_field_presence_profiles.md) with a citation-density comparison.
- Helps interpret [altmetric coverage sparsity](altmetric_coverage_sparsity.md) by field.
- Connects source-specific altmetric analysis to [citation impact indicators](citation_impact_indicators.md).
- Supports field-sensitive use of [altmetric composite scores](altmetric_composite_scores.md).

## Operationalization

- For each field, compute mean source-specific altmetric events per publication.
- Compute mean citations or a field-normalized citation score for the same publication set.
- Compare the two densities as a ratio or paired profile rather than a causal estimate.
- Report DOI coverage, document types, publication months, and source-specific denominators.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) reports field-level contrasts between average altmetric activity and citation scores across a multidisciplinary publication sample.
- The paper highlights that some fields, especially in the social sciences and humanities, can show online-attention patterns that are not well summarized by citation density alone.
- The ratio frame helps separate field coverage and audience attention from paper-level citation correlation.

## Caveats

- Altmetric event counts and citation counts are different constructs and should not be interpreted as exchangeable units.
- Composite altmetric scores can be dominated by a single source such as Twitter.
- Fields with sparse DOI coverage or uneven platform adoption require source-specific denominators.

## Links

- [altmetrics](../datasets/altmetrics.md)
- [altmetric field presence profiles](altmetric_field_presence_profiles.md)
- [altmetric coverage sparsity](altmetric_coverage_sparsity.md)
- [altmetric composite scores](altmetric_composite_scores.md)
- [citation impact indicators](citation_impact_indicators.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; SciSciNet: W2164277894; WoS: unknown]

## Metadata

- Concept ID: `altmetric_density_citation_density_ratio`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: online attention citation density ratio; field altmetric density contrast; altmetric citation density profile
