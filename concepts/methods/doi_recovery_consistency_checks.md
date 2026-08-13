# DOI recovery consistency checks

## Summary

DOI recovery consistency checks supplement an indexed publication corpus with missing DOIs, then reject recovered identifiers when core bibliographic metadata disagrees with the original record.

## Canonical Form

- Unit of analysis: publication record, candidate DOI, Crossref record, indexed source record, title, journal, issue, or publication year.
- Typical representation: recovered-DOI table, accepted/rejected match flag, metadata agreement rule, or DOI coverage audit.
- Method target: expand the identifier spine for cross-dataset joins while controlling false-positive DOI matches.
- Empirical signature: DOI coverage increases after recovery, but some candidate matches are discarded because year, journal, issue, or other metadata conflicts with the source record.

## Uses in Science of Science

- Supports [scholarly identifier spines](../representations/scholarly_identifier_spine.md) before linking publications to citations, policy mentions, patents, grants, or open-access resolvers.
- Provides an operational bridge between [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md) and usable downstream datasets.
- Makes DOI enrichment auditable in topic corpora such as the [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md).
- Reduces false joins in [policy-source corpus construction](policy_source_corpus_construction.md) and [policy document mentions](../measures/policy_document_mentions.md).

## Operationalization

- Start with the indexed corpus and preserve source-record identifiers separately from recovered identifiers.
- Query DOI registries or metadata services for records missing DOIs.
- Compare candidate records against the source record using publication year, journal title, issue, title, authors, or other available metadata.
- Accept only candidates passing the declared agreement rule; store rejected candidate counts and reasons.
- Report the pre-recovery DOI count, recovered DOI count, rejected candidate count, and final DOI-bearing denominator.
- Use the final denominator only for claims about DOI-bearing records unless non-DOI matching is also performed.

## Evidence and Validations

- Verified full-text evidence from Bornmann, Haunschild, and Marx (2016) constructs a climate-change publication set of 222,060 articles and reviews and begins with 149,657 records that already have DOIs in their Web of Science in-house database.
- Bornmann et al. query Crossref for the remaining records, then check recovered candidates against source metadata including publication year, journal title, and issue.
- They discard 30,784 candidate DOI matches because bibliographic information disagrees, while accepting 41,619 additional DOIs.
- The resulting DOI-bearing denominator contains 191,276 climate-change publications and is used to query Altmetric for policy-document mentions.

## Caveats

- Strict metadata agreement reduces false matches but can reject true matches when source metadata are noisy.
- Loose matching increases coverage but can contaminate downstream links with wrong identifiers.
- DOI recovery improves the joinable denominator; it does not remove field, year, language, or document-type coverage bias in DOI assignment.

## Links

- [scholarly identifier spines](../representations/scholarly_identifier_spine.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [climate-change policy mention corpus](../datasets/climate_change_policy_mention_corpus.md)
- [policy-source corpus construction](policy_source_corpus_construction.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [open access resolver workflows](open_access_resolver_workflows.md)
- [OpenAlex](../datasets/openalex.md)
- [Dimensions](../datasets/dimensions.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]

## Metadata

- Concept ID: `doi_recovery_consistency_checks`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: DOI recovery validation; Crossref DOI match checks; bibliographic DOI consistency; recovered DOI audit
