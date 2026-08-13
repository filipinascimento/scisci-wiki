# Altmetric policy source tracker

## Summary

Altmetric policy source tracker is the provider-maintained list of policy-related sites and documents monitored for mentions of scholarly publications.

## Canonical Form

- Unit of analysis: tracked policy source, provider snapshot, source organization, policy document, or mention event.
- Typical representation: dated source list with organizations, URLs, source types, languages, countries, and crawl coverage.
- Data target: provider-side policy-document universe from which policy mentions are observed.
- Empirical signature: observed policy mentions depend on which sources the provider tracks at the snapshot date.

## Uses in Science of Science

- Supplies the source universe for [policy-source corpus construction](../methods/policy_source_corpus_construction.md).
- Provides provenance for [policy document mentions](../measures/policy_document_mentions.md) and [policy mention coverage rate](../measures/policy_mention_coverage_rate.md).
- Makes [policy source list transparency](../validations/policy_source_list_transparency.md) and [policy source regional/language bias](../validations/policy_source_regional_language_bias.md) inspectable.
- Extends [Altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md) to a policy-specific source family.

## Operationalization

- Record the provider name, delivery date, and policy-source list snapshot.
- Store source organization names, URLs, document families, countries, languages, and source-type labels when available.
- Track source-list expansion over time and avoid comparing unversioned snapshots.
- Keep the policy-source tracker separate from the DOI-bearing publication denominator.
- Pair source inventory with context audits because source inclusion does not guarantee that every mention is policy-relevant.
- Track source sections and document types where possible to detect [unintended policy-source contamination](../validations/unintended_policy_source_contamination.md).

## Evidence and Validations

- Verified full-text evidence from Haunschild and Bornmann (2017) reports that Altmetric tracked over 40 policy-related sites by the end of 2014.
- Their data received from Altmetric on December 19, 2015 covered more than 100 policy-related sources.
- The paper lists frequent example sources including the European Food Safety Authority, World Health Organization, Food and Agriculture Organization of the United Nations, World Bank, GOV.UK, National Institute for Health and Care Excellence, Australian Policy Online, NIHR Journals Library, International Monetary Fund, and the Intergovernmental Panel on Climate Change.
- Haunschild and Bornmann recommend repeating coverage analyses regularly as new policy-related sites are tracked.

## Caveats

- A provider tracker is a selective source list, not the full policy-document universe.
- Source lists can be proprietary, example-only, or incomplete in published analyses.
- Source expansion can increase observed mentions without any change in research use by policymakers.
- Tracked pages can include unintended documents such as CV-like publication lists.

## Links

- [Altmetric provider snapshot provenance](altmetric_provider_snapshot_provenance.md)
- [policy-source corpus construction](../methods/policy_source_corpus_construction.md)
- [policy source list transparency](../validations/policy_source_list_transparency.md)
- [policy source regional/language bias](../validations/policy_source_regional_language_bias.md)
- [policy mention context audit](../validations/policy_mention_context_audit.md)
- [policy document mentions](../measures/policy_document_mentions.md)
- [policy attention coverage bias](../validations/policy_attention_coverage_bias.md)
- [policy document deduplication](../validations/policy_document_deduplication.md)
- [unintended policy-source contamination](../validations/unintended_policy_source_contamination.md)
- [altmetric source-list curation](../methods/altmetric_source_list_curation.md)

## References

- Haunschild, R., & Bornmann, L. (2017). How many scientific papers are mentioned in policy-related documents? An empirical investigation using Web of Science and Altmetric data. *Scientometrics*, 110, 1209-1216. https://doi.org/10.1007/s11192-016-2237-2 [OpenAlex: W2567946352; Dimensions: pub.1030351359; WoS: unknown]

## Metadata

- Concept ID: `altmetric_policy_source_tracker`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Haunschild and Bornmann (2017) (2017)
- Latest seen paper: Haunschild and Bornmann (2017) (2017)
- Primary reference DOI: `10.1007/s11192-016-2237-2`
- OpenAlex ID: `W2567946352`
- Dimensions ID: `pub.1030351359`
- SciSciNet ID: `W2567946352`
- Aliases: Altmetric policy sources; policy source tracker; policy-related source list; policy guidance source tracker
