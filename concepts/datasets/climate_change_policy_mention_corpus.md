# Climate-change policy mention corpus

## Summary

The climate-change policy mention corpus is a topic-specific publication set that links climate-change papers to Altmetric policy-document mentions, enabling denominator-aware analysis of policy attention.

## Canonical Form

- Unit of analysis: climate-change paper, DOI, policy mention, policy source, publication year, journal, document type, or OECD subject category.
- Typical representation: topic-filtered Web of Science paper set plus DOI recovery and policy-mention indicators.
- Data target: a policy-relevant research domain where one can compare all eligible papers with the subset mentioned in policy documents.
- Empirical signature: an eligible corpus labeled as climate change papers (CCP) and a policy-mentioned subset (CCP_P).

## Uses in Science of Science

- Provides a concrete dataset for [policy mention coverage rate](../measures/policy_mention_coverage_rate.md) and [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md).
- Supports [policy document mentions](../measures/policy_document_mentions.md) with an explicit topical denominator rather than only raw mention counts.
- Demonstrates how [policy-source corpus construction](../methods/policy_source_corpus_construction.md) and DOI recovery affect measured [policy attention coverage bias](../validations/policy_attention_coverage_bias.md).
- Demonstrates [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md) before downstream policy-mention matching.
- Provides evidence for [public and policy attention](../mechanisms/public_policy_attention.md) in a policy-relevant domain.
- Connects to [societal impact case studies](../methods/societal_impact_case_studies.md) as a scalable but narrower quantitative trace.

## Operationalization

- Construct a climate-change publication set through a topic search strategy over Web of Science articles and reviews.
- Recover DOIs from the indexed database and through Crossref, discarding recovered DOI matches with conflicting bibliographic metadata.
- Record rejected DOI candidates as part of [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md).
- Query a policy-document mention source such as Altmetric for DOI-linked mentions at a dated snapshot.
- Label all eligible climate-change papers as CCP and the subset with at least one policy mention as CCP_P.
- Compare CCP and CCP_P by year, journal, document type, subject category, and source organization.

## Evidence and Validations

- Verified full-text evidence from Bornmann et al. (2016) reports a constructed climate-change set of 222,060 articles and reviews published from 1980 to 2014.
- The paper states that 149,657 papers already had DOIs in the Web of Science in-house database and that Crossref recovery added 41,619 more after bibliographic checks.
- Bornmann et al. use 191,276 DOI-bearing climate-change papers, or 86.1% of the full set, to retrieve policy mentions from Altmetric on November 16, 2015.
- The paper finds that 2,341 papers, or 1.2% of the DOI-bearing corpus, had at least one policy mention.
- Bornmann et al. report that the most mentions originated from the Food and Agriculture Organization of the United Nations and the Intergovernmental Panel on Climate Change.

## Caveats

- The corpus is topic-specific and should not be generalized to all fields without comparison datasets.
- DOI recovery and DOI-only matching shape the eligible denominator.
- The Altmetric source snapshot was time-specific and source coverage was still expanding.
- Climate change is highly policy-relevant, yet observed policy mention coverage was still sparse; low mention rates in other domains may have different causes.

## Links

- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention enrichment profiles](../methods/policy_mention_enrichment_profiles.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [DOI recovery consistency checks](../methods/doi_recovery_consistency_checks.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [public and policy attention](../mechanisms/public_policy_attention.md)
- [altmetrics](altmetrics.md)
- [field classifications](../measures/field_classifications.md)

## References

- Bornmann, L., Haunschild, R., & Marx, W. (2016). Policy documents as sources for measuring societal impact: How often is climate change research mentioned in policy-related documents? *Scientometrics*, 109, 1477-1495. https://doi.org/10.1007/s11192-016-2115-y [OpenAlex: W2952238320; Dimensions: pub.1043901162; WoS: unknown]

## Metadata

- Concept ID: `climate_change_policy_mention_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Bornmann et al. (2016) (2016)
- Latest seen paper: Bornmann et al. (2016) (2016)
- Primary reference DOI: `10.1007/s11192-016-2115-y`
- OpenAlex ID: `W2952238320`
- Dimensions ID: `pub.1043901162`
- SciSciNet ID: `unknown`
- Aliases: climate change papers policy corpus; CCP policy corpus; CCP_P mentioned-policy subset; climate-change Altmetric policy corpus
