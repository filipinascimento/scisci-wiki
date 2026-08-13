# Field citation-density reference table

## Summary

Represents field and subfield citation-density standards as tabular percentiles separable from any one author's rank.

## Canonical Form

- Unit of analysis: field, subfield, metric, and eligible-author denominator.
- Typical representation: percentile table by field/subfield and citation metric.
- Representation target: reference standards for interpreting author citation metrics.
- Empirical signature: the same raw author metric maps to different percentiles across fields or subfields.

## Uses in Science of Science

- Extends [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md) with reusable reference tables.
- Supports field-aware interpretation without claiming citation density is quality.
- Connects author metrics to [reference set construction](../methods/reference_set_construction.md) and [raw cross-field author comparison caveat](../validations/raw_cross_field_author_comparison_caveat.md).

## Operationalization

- Publish percentile tables by field/subfield, metric, self-citation policy, source snapshot, and eligible-author denominator.
- Version the source snapshot and author inclusion rules so percentile standards can be recomputed.
- Use the table to contextualize individual ranks rather than compare raw counts across fields.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) reports career-long citation and composite-index percentiles across broad fields, with supplementary subfield extensions.
- Those tables demonstrate that field citation-density standards can be represented independently from author case narratives.

## Caveats

- These tables are citation-density standards, not quality standards.
- Small subfields and changing field boundaries can make percentiles unstable.

## Links

- [Field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [Field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [Citation distribution scaling](../measures/citation_distribution_scaling.md)
- [Reference set construction](../methods/reference_set_construction.md)
- [Raw cross-field author comparison caveat](../validations/raw_cross_field_author_comparison_caveat.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `field_citation_density_reference_table`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: field citation percentile table; author metric reference table; subfield citation-density table
