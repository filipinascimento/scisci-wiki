# Publisher-history augmentation for venue panels

## Summary

Bibliometric venue panels can be supplemented with publisher or API publication histories when the main citation index is incomplete or restricted.

## Canonical Form

- Unit of analysis: journal panel, source index, and publisher-native publication history.
- Typical representation: merged venue-history table with source provenance flags.
- Method target: coverage augmentation for long venue-specific author histories.
- Empirical signature: publisher-native records extend or fill gaps in source-index coverage for target venues.

## Uses in Science of Science

- Extends [chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md) construction with source-specific augmentation.
- Useful when exact venue history matters and one bibliometric source lacks early years or full metadata.
- Connects panel building to [citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md).

## Operationalization

- Merge source-index records with publisher/API records by DOI, title, year, volume, issue, and pages.
- Preserve provenance, duplicate-resolution decisions, document-type filters, and missing-field rates.
- Run sensitivity checks with and without augmented venue histories.

## Evidence and Validations

- Verified full-text evidence from Sekara et al. (2018) combines Web of Science data with Nature OpenSearch history to construct a longer venue panel.
- The design illustrates publisher-history augmentation for a venue-specific author-order study.

## Caveats

- Source heterogeneity can change document-type definitions, author metadata, and coverage quality.
- Publisher APIs may revise records over time and require separate snapshot provenance.

## Links

- [Chaperone-effect journal panel](../datasets/chaperone_effect_journal_panel.md)
- [Citation database coverage sensitivity](../validations/citation_database_coverage_sensitivity.md)
- [Restricted-raw public-derived bibliometric release](restricted_raw_public_derived_bibliometric_release.md)
- [Bibliometric data access modes](bibliometric_data_access_modes.md)

## References

- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `publisher_history_augmentation_for_venue_panels`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Sekara et al. (2018) (2018)
- Primary reference DOI: `10.1073/pnas.1800471115`
- OpenAlex ID: `W2904801760`
- Dimensions ID: `pub.1110510902`
- SciSciNet ID: `W2904801760`
- Aliases: publisher API venue-history augmentation; venue panel source augmentation; publisher-native journal history merge
