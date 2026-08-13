# Policy-mention dual-denominator representation

## Summary

Policy-mention dual-denominator representation models policy-mention rates with two denominators: the eligible DOI-bearing publication universe and the tracked policy-source universe.

## Canonical Form

- Unit of analysis: publication, DOI-bearing paper, tracked policy source, policy mention, or source-publication pair.
- Typical representation: publication denominator crossed with policy-source denominator.
- Representation target: make clear whether low coverage comes from publication eligibility, policy-source tracking, or both.
- Empirical signature: coverage rates are reported with both publication-side and policy-source-side boundaries.

## Uses in Science of Science

- Refines the [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md).
- Adds structure to [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md).
- Connects policy-source-side limits to [policy-source corpus construction](../methods/policy_source_corpus_construction.md).
- Complements [policy-attention hypothesis ladder](policy_attention_hypothesis_ladder.md).

## Operationalization

- Define the scientific publication universe and DOI eligibility filters.
- Define the tracked policy-source universe and its update date.
- Compute mention rates conditional on publication eligibility and tracked-source inclusion.
- Report which denominator changes under sensitivity checks.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) combines Web of Science publication records with Altmetric policy-document tracking.
- The paper discusses DOI and source-tracking limitations that affect observed policy-mention coverage.
- These limitations imply a two-denominator representation for interpreting policy-mention rates.

## Caveats

- Provider source lists may not expose all tracked-source metadata needed for full denominator audits.
- DOI-bearing publications are not the only scientifically relevant outputs.
- Policy documents may refer to science without formal citations or persistent identifiers.

## Links

- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [policy mention DOI denominator loss](../validations/policy_mention_doi_denominator_loss.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy-attention hypothesis ladder](policy_attention_hypothesis_ladder.md)
- [provider-defined policy-document boundary](../validations/provider_defined_policy_document_boundary.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; SciSciNet: W2567946352]

## Metadata

- Concept ID: `policy_mention_dual_denominator_representation`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: policy mention two-denominator model; publication-source denominator split; policy coverage denominator schema; dual denominator policy altmetrics
