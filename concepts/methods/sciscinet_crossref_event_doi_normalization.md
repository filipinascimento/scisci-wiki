# SciSciNet Crossref Event DOI normalization

## Summary

Newsfeed and Twitter links are created by normalizing DOIs and joining Crossref Event Data records to SciSciNet primary papers.

## Canonical Form

- Unit of analysis: DOI, Crossref Event Data record, Newsfeed item, tweet, primary PaperID, or external trace.
- Typical representation: DOI-normalized bridge from event records to SciSciNet papers.
- Mechanism, measurement, or validation target: linkage cleanup for social and news attention traces.
- Empirical signature: event records join to primary papers after DOI normalization and repeated event links are deduplicated.

## Uses in Science of Science

- Refines SciSciNet external-trace methods by linking it to [crossref event data mention linkages](../datasets/crossref_event_data_mention_linkages.md) and [social media attention channels](../datasets/social_media_attention_channels.md).
- Useful as a reusable check when [altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md) is used in science-of-science inference.
- Creates cross-links to [policy attention coverage bias](../validations/policy_attention_coverage_bias.md) so the motif is not interpreted in isolation.

## Operationalization

- Lowercase and normalize DOI strings from event records and paper metadata.
- Inner-join Crossref Event Data records to primary PaperIDs.
- Deduplicate repeated news or tweet links and report collection windows.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes DOI normalization for news and social media records and reports retained Newsfeed and Twitter link counts after deduplication.
- The motif isolates the DOI bridge used for external attention traces.

## Caveats

- Coverage is limited to Crossref Event Data sources and collection windows.
- Recent events are outdated in the released SciSciNet snapshot.

## Links

- [Crossref Event Data mention linkages](../datasets/crossref_event_data_mention_linkages.md)
- [Social media attention channels](../datasets/social_media_attention_channels.md)
- [Altmetric identifier matching loss](../validations/altmetric_identifier_matching_loss.md)
- [Policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [External trace count rollups](../measures/external_trace_count_rollups.md)
- [DOI denominator coverage bias](../validations/doi_denominator_coverage_bias.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `sciscinet_crossref_event_doi_normalization`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: DOI-normalized event joins; Crossref Event linkage cleanup; Twitter-Newsfeed DOI bridge
