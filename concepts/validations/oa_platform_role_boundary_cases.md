# OA platform-role boundary cases

## Summary

OA platform-role boundary cases are open-access infrastructures whose publisher, repository, and aggregator roles overlap, making route labels such as Gold, Green, or repository-hosted brittle.

## Canonical Form

- Unit of analysis: OA platform, journal, article copy, publisher role, repository role, or resolver source.
- Typical representation: mixed platform role, publisher/repository ambiguity, route-label exception, or special-case resolver rule.
- Validation target: avoid forcing access platforms into route categories that assume separable publisher and repository functions.
- Empirical signature: a platform hosts journal content while also operating as an access repository or regional publishing infrastructure.

## Uses in Science of Science

- Adds a route-classification caveat to [open access route typology](../datasets/open_access_route_typology.md).
- Refines [publisher-hosted route precedence](publisher_hosted_route_precedence.md), which assumes publisher and repository sources can be separated.
- Connects [open access evidence locations](../representations/open_access_evidence_locations.md) to source-role metadata.
- Helps interpret [hidden Gold journal detection](hidden_gold_journal_detection.md) in regional OA platforms.

## Operationalization

- Identify OA platforms whose role cannot be treated as purely publisher-hosted or repository-hosted.
- Record platform-specific rules in the resolver or route-classification pipeline.
- Preserve source provenance and platform role rather than only the final OA route label.
- Test sensitivity of route shares to alternative platform-role classification.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) discusses SciELO and Redalyc as platforms that can act like both publishers and repositories.
- The paper notes that such infrastructures do not fit cleanly into a simple publisher-versus-repository route taxonomy.
- This motivates platform-role exception handling in OA classification.

## Caveats

- Platform roles can change over time as services add hosting, indexing, preservation, or publishing functions.
- Route ambiguity can differ by article, journal, and country within the same platform.
- Special-case rules improve validity but can reduce comparability if not documented.

## Links

- [open access route typology](../datasets/open_access_route_typology.md)
- [open access status](../datasets/open_access_status.md)
- [publisher-hosted route precedence](publisher_hosted_route_precedence.md)
- [open access evidence locations](../representations/open_access_evidence_locations.md)
- [hidden Gold journal detection](hidden_gold_journal_detection.md)
- [legal open-copy exclusion boundary](legal_open_copy_exclusion_boundary.md)
- [open access prevalence measurement](../measures/open_access_prevalence_measurement.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `oa_platform_role_boundary_cases`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: OA platform role ambiguity; publisher repository boundary case; SciELO route ambiguity; Redalyc route ambiguity
