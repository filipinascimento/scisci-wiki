# WoS geocoded science corpus

## Summary

The WoS geocoded science corpus is a Web of Science publication, citation, affiliation, city, and country dataset used to build spatial citation and collaboration networks.

## Canonical Form

- Unit of analysis: paper, citation, affiliation, city, country, or spatial edge.
- Typical representation: geocoded paper-affiliation records projected into city and country citation and collaboration networks.
- Dataset target: spatial structure of scientific output, citation flows, and coauthorship flows.
- Empirical signature: papers and citations can be assigned to cities and countries for network and gravity-law analysis.

## Uses in Science of Science

- Provides the data substrate for [geographic collaboration distance](../measures/geographic_collaboration_distance.md).
- Supports [world city citation network](../representations/world_city_citation_network.md) and [world city collaboration network](../representations/world_city_collaboration_network.md).
- Depends on [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md).
- Links [Web of Science](web_of_science.md) to spatial science mapping.

## Operationalization

- Start from English Web of Science records over the target years.
- Extract publication metadata, citations, author affiliations, city names, and countries.
- Apply geocoding and place-inclusion filters.
- Project records into city and country networks for citation and collaboration analysis.

## Evidence and Validations

- Verified full-text evidence from Pan, Kaski, and Fortunato (2012) describes an ISI Web of Science corpus from 2003 to 2010 with publication, citation, affiliation, city, and country information.
- The paper uses this corpus to construct spatial citation and collaboration networks.
- It also applies city/place filters to reduce geocoding anomalies while retaining nearly all papers and citations.

## Caveats

- Web of Science coverage and English-language filtering shape the corpus.
- Affiliation parsing and geocoding errors can distort city-level edges.
- City and country aggregation can hide institution-level structure.

## Links

- [Web of Science](web_of_science.md)
- [geocoded affiliation extraction](../methods/geocoded_affiliation_extraction.md)
- [world city citation network](../representations/world_city_citation_network.md)
- [world city collaboration network](../representations/world_city_collaboration_network.md)
- [geographic collaboration distance](../measures/geographic_collaboration_distance.md)

## References

- Pan, R. K., Kaski, K., & Fortunato, S. (2012). World citation and collaboration networks: Uncovering the role of geography in science. *Scientific Reports*, 2, 902. https://doi.org/10.1038/srep00902 [OpenAlex: W2150607630; Dimensions: pub.1050077381; SciSciNet: W2150607630; WoS: unknown]

## Metadata

- Concept ID: `wos_geocoded_science_corpus`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Pan et al. (2012) (2012)
- Latest seen paper: Pan et al. (2012) (2012)
- Primary reference DOI: `10.1038/srep00902`
- OpenAlex ID: `W2150607630`
- Dimensions ID: `pub.1050077381`
- SciSciNet ID: `W2150607630`
- Aliases: geocoded WoS corpus; spatial WoS science corpus; city-country citation collaboration corpus
