# Bronze open access ambiguity

## Summary

Bronze open access ambiguity is the validation problem created by articles that are free to read on publisher websites but lack a clearly identifiable open license.

## Canonical Form

- Unit of analysis: publisher-hosted article, license statement, journal, DOI, route label, or access snapshot.
- Typical representation: Bronze OA flag, publisher URL, missing-license indicator, suspected delayed/promotional/hidden-gold subtype, and access date.
- Validation target: whether free-to-read publisher access represents durable, licensed open access or a more limited form of availability.
- Empirical signature: large numbers of publisher-hosted free articles cannot be confidently classified as Gold or Hybrid because license evidence is absent.

## Uses in Science of Science

- Qualifies [open access route typology](../datasets/open_access_route_typology.md) by making license ambiguity a first-class category rather than forcing uncertain cases into Gold, Hybrid, or Closed.
- Adds a policy guardrail to [open access prevalence measurement](../measures/open_access_prevalence_measurement.md), because free-to-read access does not necessarily include reuse rights.
- Helps interpret [open access citation advantage](../mechanisms/open_access_citation_advantage.md), since Bronze articles can have distinctive age, publisher, and journal-selection profiles.
- Requires auditable [open access evidence locations](../representations/open_access_evidence_locations.md), especially publisher pages and license fields.
- Splits all-free journals missing from Gold registries into [Hidden Gold journal detection](hidden_gold_journal_detection.md).

## Operationalization

- Identify publisher-hosted full text that is freely readable.
- Check journal-level OA status against sources such as DOAJ and inspect article-level license metadata.
- Label cases as Bronze when the article is free to read on the publisher page but lacks a clear open license.
- Record whether manual inspection suggests delayed OA, promotional access, hidden-gold journals, or transient free access.
- Re-check access over time when durability matters for policy or library decisions.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) introduces Bronze as a separate OA subtype for publisher-hosted free-to-read articles without a clearly identifiable license.
- The paper reports Bronze as the most common OA subtype in all three study samples, making license ambiguity central rather than marginal.
- Piwowar et al. manually inspected a small Bronze sample and found a mixture of delayed OA from toll-access publishers and journals that made all content free to read but were not listed in DOAJ and did not formally license content.
- The paper argues that Bronze matters for policy because it extends reading access but not necessarily reuse rights beyond reading.
- The full text explicitly calls for further research on whether Bronze access is delayed, promotional, transient, hidden Gold, or simply under-specified licensed OA.

## Caveats

- Bronze is partly a measurement category: better license metadata can move some articles into Gold or Hybrid.
- A single snapshot cannot determine whether publisher-hosted free access is temporary or permanent.
- Bronze prevalence can be affected by [publisher-hosted route precedence](publisher_hosted_route_precedence.md), because publisher-hosted access can shadow repository-hosted copies.
- Free-to-read availability should not be treated as equivalent to BOAI-style reuse permission.

## Links

- [open access route typology](../datasets/open_access_route_typology.md)
- [open access status](../datasets/open_access_status.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [OA resolver source fusion](../methods/oa_resolver_source_fusion.md)
- [publisher-hosted route precedence](publisher_hosted_route_precedence.md)
- [Hidden Gold journal detection](hidden_gold_journal_detection.md)
- [open access detection validation](open_access_detection_validation.md)
- [open access citation selection bias](open_access_citation_selection_bias.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `bronze_open_access_ambiguity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Aliases: bronze OA; free-to-read no license; publisher-hosted free access; ambiguous OA route
