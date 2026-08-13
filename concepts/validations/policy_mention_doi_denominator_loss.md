# Policy mention DOI denominator loss

## Summary

Policy mention DOI denominator loss is the validity problem that policy-mention analyses based on DOI matching exclude papers without DOI identifiers and policy references that do not cite DOIs.

## Canonical Form

- Unit of analysis: DOI-bearing paper, non-DOI paper, policy mention record, provider match, publication year, field, or document type.
- Typical representation: DOI coverage rate, DOI-only denominator, unmatched policy reference share, or denominator exclusion note.
- Validation target: whether a policy-mention rate can be generalized beyond DOI-bearing scholarly outputs.
- Empirical signature: papers without DOI are omitted from the eligible denominator and policy documents without DOI-style citation cannot be matched by DOI-only workflows.

## Uses in Science of Science

- Specializes [DOI denominator coverage bias](doi_denominator_coverage_bias.md) for policy-document mention data.
- Qualifies [WoS-Altmetric policy mention panels](../datasets/wos_altmetric_policy_mention_panel.md), [policy mention coverage rate](../measures/policy_mention_coverage_rate.md), and [policy document mentions](../measures/policy_document_mentions.md).
- Links identifier coverage to [policy citation-style omission](policy_citation_style_omission.md), because policy documents often cite less formally than scholarly papers.
- Supports [responsible metrics](../measures/responsible_metrics.md) by keeping denominator claims narrow.

## Operationalization

- Report whether the policy-mention match is DOI-only, URL-based, title-based, or mixed.
- Quantify DOI availability in the bibliographic denominator and provider records.
- State that the measured rate applies to DOI-bearing eligible publications when non-DOI records are excluded.
- Where possible, audit a sample of policy documents for non-DOI scholarly references.
- Avoid interpreting DOI-matched non-mentions as no policy use.

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) states that their merge between Altmetric data and the WoS-based in-house database was possible only via DOI.
- The paper therefore considers only DOI-bearing papers in the analysis.
- Haunschild and Bornmann report that since 2006 at least half of papers indexed in Web of Science have a DOI, while 83.5% of the altmetrics records have one.
- The authors list DOI restriction as a main limitation of the study.

## Caveats

- DOI coverage varies by field, publication year, language, document type, and index coverage.
- Policy documents may use reports, datasets, books, or webpages without DOI references.
- Title/URL matching can reduce DOI loss but introduces different false-match risks.

## Links

- [DOI denominator coverage bias](doi_denominator_coverage_bias.md)
- [WoS-Altmetric policy mention panel](../datasets/wos_altmetric_policy_mention_panel.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy mention coverage rate](../measures/policy_mention_coverage_rate.md)
- [policy citation-style omission](policy_citation_style_omission.md)
- [policy attention coverage bias](policy_attention_coverage_bias.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [scholarly identifier spine](../representations/scholarly_identifier_spine.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `policy_mention_doi_denominator_loss`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: DOI-only policy mention bias; policy DOI matching loss; policy mention identifier loss; DOI-restricted policy denominator
