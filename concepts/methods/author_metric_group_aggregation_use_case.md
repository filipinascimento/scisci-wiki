# Author-metric group aggregation use case

## Summary

Makes explicit the use of author-level metric tables for evaluating groups such as fields, institutions, countries, or memberships.

## Canonical Form

- Unit of analysis: group of authors, institution, country, field, society, or membership list.
- Typical representation: group-level summary of author metrics with field and size adjustments.
- Method target: aggregation of individual author indicators into group-level evidence.
- Empirical signature: group comparisons change when membership, affiliation timing, or field mix is altered.

## Uses in Science of Science

- Links individual-author metrics to [group h-index](../measures/group_h_index.md) and institutional assessment workflows.
- Useful when standardized author tables are repurposed for field, institution, or country comparisons.
- Connects group aggregation to [author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md).

## Operationalization

- Define group membership, deduplicate authors and papers, and state current-versus-historical affiliation logic.
- Stratify or normalize by field and report group size effects.
- Disclose whether multi-affiliated authors are counted fully, fractionally, or by primary affiliation.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) says the database can be used to evaluate groups of individuals at field, institution, country, or membership levels.
- That statement motivates group aggregation as a distinct use case with its own caveats.

## Caveats

- Group aggregation can be dominated by single-affiliation labels, field mix, and group size.
- Author-level indicators can invite inappropriate institutional ranking if mission differences are ignored.

## Links

- [Author-metric single-affiliation caveat](../validations/author_metric_single_affiliation_caveat.md)
- [Group h-index](../measures/group_h_index.md)
- [Field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [Paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [Responsible metrics](../measures/responsible_metrics.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; WoS: unknown]

## Metadata

- Concept ID: `author_metric_group_aggregation_use_case`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: group-level author metric aggregation; author metric institutional aggregation; author-table group assessment
