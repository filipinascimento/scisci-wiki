# Commercial-free access channel contrast

## Summary

Commercial-free access channel contrast separates electronic availability through commercial archives from free journal-web availability when estimating how online access changes citation behavior.

## Canonical Form

- Unit of analysis: journal-year, subfield-year, access route, citation outcome, or archive platform.
- Typical representation: parallel commercial and free online-depth variables in the same panel model.
- Method target: distinguish whether a result is specific to a route, platform, interface, or general online access.
- Empirical signature: commercial and free access variables have similar or contrasting associations with citation age, breadth, and concentration.

## Uses in Science of Science

- Refines [online backfile depth](../measures/online_backfile_depth.md) by preserving access-route provenance.
- Validates [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md) against the possibility that only one archive type drives the effect.
- Generalizes to publisher platforms, repositories, preprint servers, institutional subscriptions, and open-access resolvers.
- Helps separate access expansion from interface design, licensing, and user population differences.

## Operationalization

- For each source-year, record commercial archive depth and free journal-site depth separately.
- Include both route-specific variables in panel models, using lagged availability where citation behavior is measured later.
- Compare coefficients across outcomes such as reference age, distinct cited sources, and citation concentration.
- Test robustness to the number of commercial archives carrying the same journal.

## Evidence and Validations

- Verified full-text evidence from Evans (2008) uses Fulltext Sources Online to distinguish journals available in commercial electronic archives from journals available freely on their own websites.
- Evans compares print-only, print plus commercial archive, and free online access states inside fixed-effect journal and subfield models.
- The full text reports that commercial and free online provision both reshape citation behavior, with commercial provision consistently increasing citation concentration and free availability showing mixed but often similar directional effects.
- Evans also reports similar results after accounting for whether journals were present in one, two, or three or more commercial archives.

## Caveats

- Commercial and free access routes differ in users, interfaces, metadata, search defaults, and institutional subscription patterns.
- Route variables measure availability, not actual reading or downloading.
- Modern open-access routes require more granular categories than a simple commercial/free split.

## Links

- [online backfile depth](../measures/online_backfile_depth.md)
- [online availability panel identification](../validations/online_availability_panel_identification.md)
- [electronic access citation narrowing](../mechanisms/electronic_access_citation_narrowing.md)
- [open access route typology](../datasets/open_access_route_typology.md)
- [open access resolver workflows](open_access_resolver_workflows.md)
- [citation concentration Herfindahl](../measures/citation_concentration_herfindahl.md)

## References

- Evans, J. A. (2008). Electronic publication and the narrowing of science and scholarship. *Science*, 321(5887), 395-399. https://doi.org/10.1126/science.1150473 [OpenAlex: W2125660293; Dimensions: pub.1062457136; WoS: unknown]

## Metadata

- Concept ID: `commercial_free_access_channel_contrast`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Evans (2008) (2008)
- Latest seen paper: Evans (2008) (2008)
- Primary reference DOI: `10.1126/science.1150473`
- OpenAlex ID: `W2125660293`
- Dimensions ID: `pub.1062457136`
- SciSciNet ID: `W2125660293`
- Aliases: commercial versus free online availability; access-route contrast; route-specific online access; archive channel contrast
