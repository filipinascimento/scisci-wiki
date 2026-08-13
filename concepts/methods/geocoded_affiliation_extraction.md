# Geocoded affiliation extraction

## Summary

Geocoded affiliation extraction converts publication affiliation strings into city and country locations with geographic coordinates for spatial science-of-science analysis.

## Canonical Form

- Unit of analysis: paper, affiliation string, city, country, latitude-longitude pair, or publication-location link.
- Typical representation: paper-affiliation-location table, city/country assignment, coordinate lookup, or geocoded scholarly edge list.
- Method target: attach scholarly outputs and citation events to places so spatial networks and distance effects can be measured.
- Empirical signature: most publications can be assigned to city and country locations, enabling city-level and country-level collaboration and citation networks.

## Uses in Science of Science

- Provides the preprocessing layer for [world city citation network](../representations/world_city_citation_network.md) and [world city collaboration network](../representations/world_city_collaboration_network.md).
- Supports [geographic collaboration distance](../measures/geographic_collaboration_distance.md) and [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md).
- Feeds [affiliation fractional network projection](affiliation_fractional_network_projection.md), which defines how multi-location papers become weighted spatial edges.
- Complements [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md), which follows locations over author careers rather than assigning paper-level locations.
- Helps expose how geography enters [citation networks](../representations/citation_networks.md) and [international collaboration networks](../representations/international_collaboration_networks.md).

## Operationalization

- Parse affiliation strings from publication metadata.
- Extract city and country names for every affiliation.
- Resolve latitude and longitude using curated gazetteers or external lookup resources.
- Associate a paper with all represented cities and countries when multiple affiliations appear.
- Apply minimum-output cutoffs or manual audits to reduce misclassification and sparse-location noise.
- Compute great-circle distance between location pairs when spatial edge measures are needed.

## Evidence and Validations

- Verified full-text evidence from Pan et al. (2012) parses affiliations for Web of Science publications and determines geographic location at city and country levels.
- The paper reports 8,094,948 publications and 62,105,592 citations from 2003-2010, with geographic information extracted from 8,092,314 publications.
- Pan et al. identify 226 countries and 37,750 cities, then retain 18,199 cities appearing in at least five publications.
- The retained cities produce 99.8 percent of total publications and receive 99.9 percent of total citations.
- The paper uses latitude and longitude coordinates and the Haversine formula to calculate great-circle distances between cities.

## Caveats

- Affiliation strings can contain spelling variants, missing cities, multiple campuses, and obsolete institutional names.
- Geocoding a publication to all listed affiliations can create many place pairs from a single paper.
- City-level assignment can miss metro-area structure, multi-campus institutions, and remote or honorary affiliations.

## Links

- [world city citation network](../representations/world_city_citation_network.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [affiliation fractional network projection](affiliation_fractional_network_projection.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)
- [scholarly spatial gravity law](../measures/scholarly_spatial_gravity_law.md)
- [citation-collaboration flow coupling](../mechanisms/citation_collaboration_flow_coupling.md)
- [affiliation trajectory reconstruction](affiliation_trajectory_reconstruction.md)
- [paper-author-affiliation linkages](../representations/paper_author_affiliation_linkages.md)
- [web of science](../datasets/web_of_science.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; WoS: unknown]

## Metadata

- Concept ID: `geocoded_affiliation_extraction`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: affiliation geocoding; city-country affiliation parsing; scholarly geocoding; publication location extraction
