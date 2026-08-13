# Gratis-libre rights gradient

## Summary

Open access can be represented as a rights bundle that separates read access from reuse, crawling, mining, archiving, and license clarity.

## Canonical Form

- Unit of analysis: article, OA copy, license statement, access route, or usage right.
- Typical representation: rights vector with read-free, license-present, reuse-allowed, machine-readable license, and host provenance fields.
- Mechanism, measurement, or validation target: distinction between free-to-read access and libre reuse rights.
- Empirical signature: articles with similar reader access differ in reuse permissions and license metadata..

## Uses in Science of Science

- Refines [open access route typology](../datasets/open_access_route_typology.md) with rights dimensions.
- Provides a structured representation for [bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md).
- Useful when reuse, text mining, or archiving matters more than reader access alone.

## Operationalization

- Store read-free, license-present, reuse-allowed, machine-readable license, source host, and evidence URL separately.
- Do not infer libre reuse from publisher availability without license evidence.
- Audit license metadata against landing pages and repository records.

## Evidence and Validations

- Verified full-text evidence from Piwowar et al. (2018) distinguishes BOAI/libre reuse rights from free-to-read/gratis access and links Bronze OA to missing reuse rights.
- This supports a rights-gradient representation rather than one binary OA label.

## Caveats

- License metadata can be absent or wrong even when legal rights exist.
- Rights can change over time through takedowns, embargoes, or publisher policy shifts.

## Links

- [Open access route typology](../datasets/open_access_route_typology.md)
- [Bronze open access ambiguity](../validations/bronze_open_access_ambiguity.md)
- [Open access evidence locations](open_access_evidence_locations.md)
- [Legal open-copy exclusion boundary](../validations/legal_open_copy_exclusion_boundary.md)
- [Responsible metrics](../measures/responsible_metrics.md)

## References

- Piwowar, H., Priem, J., Lariviere, V., Alperin, J. P., Matthias, L., Norlander, B., Farley, A., West, J., & Haustein, S. (2018). The state of OA: A large-scale analysis of the prevalence and impact of Open Access articles. *PeerJ*, 6, e4375. https://doi.org/10.7717/peerj.4375 [OpenAlex: W2741809807; Dimensions: pub.1101032124; WoS: unknown]

## Metadata

- Concept ID: `gratis_libre_rights_gradient`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Piwowar et al. (2018) (2018)
- Latest seen paper: Piwowar et al. (2018) (2018)
- Primary reference DOI: `10.7717/peerj.4375`
- OpenAlex ID: `W2741809807`
- Dimensions ID: `pub.1101032124`
- SciSciNet ID: `W2741809807`
- Aliases: gratis libre OA gradient; OA rights bundle; open-access reuse rights gradient
