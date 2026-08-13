# External trace count rollups

## Summary

Heterogeneous upstream and downstream link tables can be rolled up into paper-level counts for funding, patents, trials, news, and social media.

## Canonical Form

- Unit of analysis: paper, external trace, grant, patent citation, clinical trial, news mention, or social-media mention.
- Typical representation: paper-level count columns derived from typed external link tables.
- Mechanism, measurement, or validation target: external-use and support traces associated with publications.
- Empirical signature: a paper has separate count fields for grants, patents, trials, news mentions, and social-media traces..

## Uses in Science of Science

- Summarizes [upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md) for analysis.
- Complements [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md).
- Helps compare funding, policy, clinical, and technology traces without flattening link tables.

## Operationalization

- Count NSF and NIH grants per primary paper.
- Count patent citations, Newsfeed mentions, Twitter mentions, and NCT citations per primary paper.
- Retain the original typed link tables so counts can be audited.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes grant and external-use count calculations exposed in the SciSciNet paper table.

## Caveats

- Counts are not directly comparable across sources with different coverage and time windows.
- Matching quality and source scope should be reported with every rollup.

## Links

- [Upstream-downstream scholarly linkages](../datasets/upstream_downstream_scholarly_linkages.md)
- [SciSciNet precomputed metric bundle](../datasets/sciscinet_precomputed_metric_bundle.md)
- [Grant-publication linkage tables](../datasets/grant_publication_linkage_tables.md)
- [Patent-paper links](../datasets/patent_paper_links.md)
- [Clinical-trial publication linkages](../datasets/clinical_trial_publication_linkages.md)
- [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `external_trace_count_rollups`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: paper-level external counts; upstream downstream count columns; broader-impact trace counts; grant and public-use rollups
