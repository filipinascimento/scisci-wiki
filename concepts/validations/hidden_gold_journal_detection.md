# Hidden Gold journal detection

## Summary

Hidden Gold journal detection identifies journals that make all content free to read but are missing from formal Gold OA registries or lack explicit open-license metadata.

## Canonical Form

- Unit of analysis: journal, publisher platform, article, license field, DOAJ listing, or Bronze OA sample.
- Typical representation: all-content-free flag, DOAJ absence, missing-license indicator, journal-level manual review, and reclassification candidate.
- Validation target: determine whether Bronze-labeled articles are actually unregistered or under-specified Gold OA.
- Empirical signature: many articles from the same journal are free to read on the publisher site, but the journal is not listed in DOAJ and does not expose clear open licenses.

## Uses in Science of Science

- Refines [bronze open access ambiguity](bronze_open_access_ambiguity.md) by separating temporary or delayed free access from all-free journals with weak metadata.
- Improves [open access detection validation](open_access_detection_validation.md), because route labels can be wrong even when binary OA status is correct.
- Helps [open access prevalence measurement](../measures/open_access_prevalence_measurement.md) avoid undercounting Gold OA when registry coverage or license metadata are incomplete.
- Connects [open access route typology](../datasets/open_access_route_typology.md) to journal-level metadata audits.

## Operationalization

- Group Bronze-labeled articles by journal, publisher, ISSN, and platform.
- Check whether the journal makes a high share or all recent content free to read.
- Compare against DOAJ or other Gold OA registries and inspect article- and journal-level license statements.
- Reclassify only when the journal-level evidence and licensing policy are strong enough; otherwise keep a Hidden Gold candidate flag.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) reports manual inspection of a small Bronze sample.
- The authors found that nearly half of inspected Bronze articles were hosted by journals publishing all content as free to read while not listed in DOAJ and not formally licensing content.
- They suggest that such journals might be better described as Dark Gold or Hidden Gold than Bronze.
- The paper's limitations section states that future work should identify OA journals not indexed in DOAJ and classify such articles as Gold when appropriate.

## Caveats

- Free-to-read journal access is not equivalent to reusable open access without explicit license evidence.
- DOAJ absence can reflect indexing lag, journal quality concerns, or incomplete metadata rather than a resolver error.
- Reclassification should preserve the access-date and license evidence that justified the decision.

## Links

- [bronze open access ambiguity](bronze_open_access_ambiguity.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access detection validation](open_access_detection_validation.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [open access resolver workflows](../methods/open_access_resolver_workflows.md)
- [publisher-hosted route precedence](publisher_hosted_route_precedence.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `hidden_gold_journal_detection`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: Dark Gold detection; unregistered Gold OA journal; hidden Gold OA; DOAJ-missing free journal
