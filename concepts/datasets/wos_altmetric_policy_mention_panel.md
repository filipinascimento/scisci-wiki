# WoS-Altmetric policy mention panel

## Summary

The WoS-Altmetric policy mention panel links DOI-bearing Web of Science articles and reviews to Altmetric records of policy-related document mentions.

## Canonical Form

- Unit of analysis: DOI-bearing WoS paper, policy mention, publication year, subject category, or provider snapshot.
- Typical representation: publication denominator with a binary at-least-one policy mention flag, publication year, document type, and WoS subject categories.
- Data target: estimate observed policy-document mention coverage for a broad scholarly publication set.
- Empirical signature: sparse policy mentions are matched to DOI-bearing papers through an Altmetric provider snapshot.

## Uses in Science of Science

- Provides a broad denominator for [policy document mentions](../measures/policy_document_mentions.md).
- Connects [Web of Science](web_of_science.md) publication records to [Altmetric policy source trackers](altmetric_policy_source_tracker.md).
- Supports [policy mention coverage rate](../measures/policy_mention_coverage_rate.md), [annual policy mention coverage curves](../measures/annual_policy_mention_coverage_curve.md), and [policy subject-category concentration](../measures/policy_subject_category_concentration.md).
- Makes [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md) explicit because the merge uses DOI identifiers.

## Operationalization

- Start from Web of Science articles and reviews in the selected publication years.
- Restrict to DOI-bearing records if the provider match is DOI-only.
- Merge policy-mention records from Altmetric or another provider by DOI.
- Count each paper as mentioned if it has at least one policy-related mention in the provider snapshot.
- Stratify the linked panel by publication year and Web of Science subject category.
- Record provider snapshot date, tracked policy-source list, document-type filters, and source expansion caveats.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) merges Altmetric policy-related mention data with an in-house bibliometric database based on Web of Science.
- The merge is possible only via DOI, so the analysis is restricted to DOI-bearing papers.
- The paper studies articles and reviews published between 2000 and 2014 and uses 11,254,636 papers in the denominator.
- Haunschild and Bornmann identify 35,504 papers, or 0.32% of the denominator, with at least one policy-related mention.

## Caveats

- DOI-only matching excludes non-DOI papers and policy uses that lack a DOI citation.
- Web of Science subject categories and document-type filters shape the denominator.
- Provider source-list expansion can change the panel without a real change in policy use.
- The panel captures observed mentions in tracked sources, not all policy influence.

## Links

- [Web of Science](web_of_science.md)
- [altmetrics](altmetrics.md)
- [altmetric residual-category caveat](../validations/altmetric_residual_category_caveat.md)
- [Altmetric policy source tracker](altmetric_policy_source_tracker.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [annual policy mention coverage curve](../measures/annual_policy_mention_coverage_curve.md)
- [policy subject-category concentration](../measures/policy_subject_category_concentration.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [provider-defined policy-document boundary](../validations/provider_defined_policy_document_boundary.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy-attention hypothesis ladder](../representations/policy_attention_hypothesis_ladder.md)
- [policy-mention dual-denominator representation](../representations/policy_mention_dual_denominator_representation.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `wos_altmetric_policy_mention_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: WoS policy mention panel; Altmetric policy mention panel; DOI-linked policy mention corpus; WoS-Altmetric policy linkage
