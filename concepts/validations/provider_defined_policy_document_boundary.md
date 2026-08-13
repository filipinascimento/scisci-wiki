# Provider-defined policy-document boundary

## Summary

Provider-defined policy-document boundary is the caveat that using a commercial or curated source list to define policy-related documents delegates part of the construct definition to the data provider.

## Canonical Form

- Unit of analysis: policy source, tracked document, provider source list, policy mention, or policy corpus.
- Typical representation: policy-document universe inherited from provider-defined inclusion rules.
- Validation target: make the policy-document boundary auditable rather than implicit.
- Empirical signature: policy-mention results are interpreted in light of the provider's tracked source list and inclusion criteria.

## Uses in Science of Science

- Extends [policy source list transparency](policy_source_list_transparency.md).
- Adds a construct-validity layer to [policy-source corpus construction](../methods/policy_source_corpus_construction.md).
- Qualifies [assessment report policy boundary](assessment_report_policy_boundary.md).
- Helps compare Altmetric, Overton, curated manual lists, and local policy-source corpora.

## Operationalization

- Archive or document the policy source list used at the time of analysis.
- State the provider's inclusion criteria when available.
- Report source categories, countries, languages, and update dates.
- Sensitivity-test findings under alternative policy-source definitions when possible.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) notes the lack of a clear definition for policy-related documents.
- The paper relies on Altmetric's tracked policy-source list to operationalize the policy-document universe.
- This makes provider boundary transparency central to interpreting policy-mention coverage.

## Caveats

- Provider source lists can be useful even when imperfect, especially at scale.
- Source lists evolve over time, complicating longitudinal comparisons.
- Manual source definitions can also be biased, so the issue is not unique to commercial providers.

## Links

- [policy source list transparency](policy_source_list_transparency.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [assessment report policy boundary](assessment_report_policy_boundary.md)
- [Altmetric policy source tracker](../datasets/altmetric_policy_source_tracker.md)
- [policy mention DOI denominator loss](policy_mention_doi_denominator_loss.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; SciSciNet: W2567946352]

## Metadata

- Concept ID: `provider_defined_policy_document_boundary`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: provider policy-source boundary; delegated policy corpus definition; Altmetric source-list construct boundary; provider-defined policy universe
